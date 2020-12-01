import React, { PureComponent } from "react";
import { ProfileWrapper, TitleWrapper } from './style'



export default class Profile extends PureComponent {
  render() {
    return (
      <ProfileWrapper>
        <TitleWrapper>Profile title</TitleWrapper>
        <ul>
          <li className="active">item-1</li>
          <li>item-2</li>
          <li>item-3</li>
        </ul>
      </ProfileWrapper>
    );
  }
}
