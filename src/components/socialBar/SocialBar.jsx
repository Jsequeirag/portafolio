import React from "react";
import "./socialBar.css";
import Ztext from "react-ztext";
export default function SocialBar() {
  return (
    <div class="icon-bar">
      <a href="/ww" class="linkedin">
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="https://github.com/Jsequeirag/" class="github">
        <i class="fa fa-github"></i>
      </a>
      <a href="/" class="github">
        <Ztext
          depth="1rem"
          direction="both"
          event="pointer"
          eventRotation="10deg"
          eventDirection="default"
          fade={false}
          layers={14}
          perspective="500px"
        >
          <span role="img" aria-label="emoji">
            🤖
          </span>
        </Ztext>
      </a>
    </div>
  );
}
