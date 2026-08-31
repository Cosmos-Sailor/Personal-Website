<style>
  .markdown-body {
    background-color: #f0f0f0 !important;
    color: rgba(0, 0, 0, 1) !important;
    text-align: left;
    padding: '15px';
    font-size: '20px';
    line-height: 1.6;
    variant: 'h3';
  }
</style>
One of the first things my team did during the course of the MQP was assign each person a portion of the project that they would take lead on. As I double majored in mechanical and robotics engineering and therefore had some of the stronger design skills out of the team members, my main responsibility in the project was the design and testing of our end-effector, or manipulator.

This process started with an incredibly in-depth study into the current literature on aerial manipulators, manipulators used in trash collection, and current advancements in manipulator design. Through this research I compiled a list of the following important characteristics that I would have to consider in my design.
1. The manipulator would need to have enough versatility to grab object of various sizes from various angles
2. The manipulator would need to be flexible enough that it could adjust for the inevitable deviations in the end effector's position due to the movement of the drone
3. The manipulator would need to be strong enough to lift 1 lb, the approximate weight of a single soda can, without it slipping out

In order to meet these standards, many of the papers I read had utilized "soft robotics", a field of robotics that involves making components out of flexible materials so they can conform to surfaces and move in additional directions without the need for extra motors or actuators. While this definitely seemed like a good avenue for us to pursue, soft robotic manipulators are much more challenging to design and soft robotics as a field was something that no one on the team had any personal experience with. Because of this, we decided to go with a simpler, "hard robotics" gripper, for our first design.
