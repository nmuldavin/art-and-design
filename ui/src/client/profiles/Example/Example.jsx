import React, { Fragment } from 'react';

import Issue from '../../layouts/Issue';
import Content, { Quote, CaptionedImage } from '../../layouts/Content';
import FullImage from '../../layouts/FullImage';
import MultiImage, { Image } from '../../layouts/MultiImage';

import bayBridge from './bayBridge.jpg';
import shifter from './shifter.jpg';
import deschutes from './deschutes.jpg';
import speaker from './speaker.jpg';
import gamingDevice from './gamingDevice.jpg';

import profile from './profile';

const Example = () => (
  <Fragment>
    <Issue {...profile}>
      <Content title="Famous Names In Barbecue">
        <h4>Do you like chicken?</h4>
        <p>
          You may be a person who loves to cook. You absolutely love to spend
          time in your kitchen. As a result, you like to outfit your kitchen
          with the latest and with the best cookware that is available on the
          market. However, and with that said, if you are like most people in
          the 21st century, you also live your life on a budget. You simply do
          not have a great deal of extra money to blow and spend at will.
          Therefore, with the goal of outfitting your kitchen with the latest,
          with the best in cookware, you also want to keep your eyes on ways in
          which you can save money on your cookware purchases. To this end, you
          might want to focus your attention on the Internet and the World Wide
          Web, specifically on overstock merchandise sites that are springing up
          all over the Net. <a href="/#">Hi there</a>
        </p>
        <Quote credit="Eric Herrmann">
          I like chicken, I like liver. Meow Mix. Meow Mix. Please deliver.
        </Quote>
        <h4>Where in the world is Carmen Sandiego?</h4>
        <p>
          There are many benefits that can be realized by shopping for cookware
          at overstock sites on the Net. First and foremost is price. In the
          vast majority of instances, you will be able to find up to date
          cookware for sale at these overstock websites for prices far less than
          what you will be able to find otherwise at different retail venues in
          either the brick and mortar world or on the World Wide Web.
        </p>
        <h4>Who let the dogs out?</h4>
        <p>
          One of the other, important benefits to be realize by shopping for
          cookware for your home at overstock sites is found in the fact that
          they are very convenient. A consumer such as you literally can shop
          for cookware twenty four hours a day and seven days a week. If you are
          like most people in this day and age, not only are you living on a
          tight budget, but you are living on a tight schedule as well. You
          simply do not have the time available to you to shop around, to spend
          a great deal of time going from store to store, looking for cookware
          for your home. Thus, an Internet based overstock site can be a true
          godsend.
        </p>
      </Content>
      <FullImage src={bayBridge} alt="Bay Bridge" />
      <Content>
        <h4>Why are you like this?</h4>
        <p>
          You may be a person who loves to cook. You absolutely love to spend
          time in your kitchen. As a result, you like to outfit your kitchen
          with the latest and with the best cookware that is available on the
          market. However, and with that said, if you are like most people in
          the 21st century, you also live your life on a budget. You simply do
          not have a great deal of extra money to blow and spend at will.
          Therefore, with the goal of outfitting your kitchen with the latest,
          with the best in cookware, you also want to keep your eyes on ways in
          which you can save money on your cookware purchases. To this end, you
          might want to focus your attention on the Internet and the World Wide
          Web, specifically on overstock merchandise sites that are springing up
          all over the Net.
        </p>
        <Quote credit="Eric Herrmann">
          I like chicken, I like liver. Meow Mix. Meow Mix. Please deliver.
        </Quote>
        <h4>Why do birds suddenly appear?</h4>
        <p>
          As a final reminder, make certain that you only patronize those
          overstock sites that have established reputations for reliability. By
          shopping at an established site, you will make certain that you do
          obtain exactly the cookware products that you have bargained for while
          visiting one of the overstock venues on the Net.
        </p>
      </Content>
      <FullImage src={shifter} alt="Shifter" />
      <MultiImage>
        <Image src={deschutes} alt="Deschutes" />
        <Image src={speaker} alt="Speaker" />
      </MultiImage>
      <Content>
        <CaptionedImage
          src={gamingDevice}
          alt="Gaming Device"
          title="Eric (left) pointing at a gaming device"
          subtitle="You may be a person who loves to cook. You absolutely love to spend time in your kitchen."
        />
        <h4>Why are you like this?</h4>
        <p>
          You may be a person who loves to cook. You absolutely love to spend
          time in your kitchen. As a result, you like to outfit your kitchen
          with the latest and with the best cookware that is available on the
          market. However, and with that said, if you are like most people in
          the 21st century, you also live your life on a budget. You simply do
          not have a great deal of extra money to blow and spend at will.
          Therefore, with the goal of outfitting your kitchen with the latest,
          with the best in cookware, you also want to keep your eyes on ways in
          which you can save money on your cookware purchases. To this end, you
          might want to focus your attention on the Internet and the World Wide
          Web, specifically on overstock merchandise sites that are springing up
          all over the Net.
        </p>
        <h4>Why do birds suddenly appear?</h4>
        <p>
          You may be a person who loves to cook. You absolutely love to spend
          time in your kitchen. As a result, you like to outfit your kitchen
          with the latest and with the best cookware that is available on the
          market. However, and with that said, if you are like most people in
          the 21st century, you also live your life on a budget. You simply do
          not have a great deal of extra money to blow and spend at will.
          Therefore, with the goal of outfitting your kitchen with the latest,
          with the best in cookware, you also want to keep your eyes on ways in
          which you can save money on your cookware purchases. To this end, you
          might want to focus your attention on the Internet and the World Wide
          Web, specifically on overstock merchandise sites that are springing up
          all over the Net. Therefore, with the goal of outfitting your kitchen
          with the latest, with the best in cookware, you also want to keep your
          eyes on ways in which you can save money on your cookware purchases.
          To this end, you might want to focus your attention on the Internet
          and the World Wide Web, specifically on overstock merchandise sites
          that are springing up all over the Net.
        </p>
      </Content>
    </Issue>
  </Fragment>
);

export default Example;
