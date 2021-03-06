class User < ApplicationRecord
  attr_reader :password

  validates :first_name,
            :last_name,
            :email,
            :username,
            :password_digest,
            :session_token,
            presence: true
  validates :username,
            :email,
            :session_token,
            uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :projects, dependent: :destroy, inverse_of: :user
  has_many :items, through: :projects
  has_many :comments
  has_many :likes
  has_many :liked_projects,
    through: :likes,
    source: :project

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def self.find_by_credentials(username, password)
    user = self.find_by_username(username)
    return nil if user.nil?
    user.password_is?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end
  
  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom::urlsafe_base64
  end
  
  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end
end
