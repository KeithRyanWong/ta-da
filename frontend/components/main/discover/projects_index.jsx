import React from 'react';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllProjects();
  }

  render() {
    let splash = this.props.currentUser.id ? null : <div>
      <video poster="http://res.cloudinary.com/krwappacademy/image/upload/v1500921457/splash%20still.png" className="splashvid" autoPlay loop>
        <source src="http://res.cloudinary.com/krwappacademy/video/upload/ac_none,c_scale,h_300,q_100,vc_auto,w_1920/v1500858823/loop.mp4" />
        <source src="http://res.cloudinary.com/krwappacademy/video/upload/ac_none,c_fill,h_300,q_100,vc_auto,w_1920/v1500858823/loop.webm" />
        </video>
        <div className="splash-text">Showcase & Discover<br />Creative Work</div>
    </div>;
    return(
      <div className='content-container'>
        <div className='splash-container'>
          {splash}
        </div>
        <div className={`explore-projects-index-item-container ${this.props.currentUser.id ? 'move-up' : ''}`}>
          <div className="projects-index-item-container">
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
            <div className="projects-index-item"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsIndex;