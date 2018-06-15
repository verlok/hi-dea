Things I don't like

- When resetting the animation to start, it should start from where the transition brought the letters, instead of from degrees 0.
  - Hint: use some `--startDeg` and `--endDeg` custom properties in the animation keyframes definition, then set the variables before re-animating
- The inner letters should have an equal amount of degrees one from another, which should be `360deg / number of letters in that circle`.
  - This could make things complicated to define the degrees to rotate the wheels when an item is selected
- The circles should move all together in the same direction, instead of one letter one way and another letter the opposite
  - Need some property telling if the wheel is going clockwise or counterclockwise
  - Need some calculations to understand when rotate to 360+degrees or 0-degrees
