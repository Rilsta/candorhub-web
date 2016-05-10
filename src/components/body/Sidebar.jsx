import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageDehaze from 'material-ui/svg-icons/image/dehaze';

const contentClearStyles = {
  marginLeft: 250,
  marginTop: 10,
};

const imageDehazeStyles = {
  marginRight: 800,
  marginTop: -300,
};

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() { this.setState({open: !this.state.open}); }

  handleClose() { this.setState({open: false}); }

  render() {
    return (
      <div>
        <ImageDehaze style={imageDehazeStyles} onClick={this.handleToggle} />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          <ContentClear style={contentClearStyles} onClick={this.handleClose}/>
          <MenuItem a href="/">Home</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}