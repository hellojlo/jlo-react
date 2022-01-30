import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p><a href="https://jeanlouis.nl">Jean Louis Le</a>, &copy;{(new Date()).getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
