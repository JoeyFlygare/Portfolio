import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Please contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linkedin :<a href={resumeData.linkedinId}> Joey Flygare</a></h4>
              <h4>Resume :<a href="https://drive.google.com/file/d/1pfMpnudFtfDEjeT2zke4YxGPwlF68CTy/view?usp=sharing"> Here!</a></h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
