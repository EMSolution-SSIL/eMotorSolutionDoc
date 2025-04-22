---
sidebar_position: 2
---
# Dimension
<p>![dimension](./img/dimension.png)</p>

The stator and rotor core dimensions are defined here. 
* Stator Outer Radius
* Stator Inner Radius
* Rotor Outer Radius
* Rotor Inner Radius

The constraints may differ depending on the machine topology; for internal rotor machines:
```
Stator Outer Radius > Stator Inner Radius > Rotor Outer Radius > Rotor Inner Radius > 0
```
And for external rotor machines:
```
0 < Stator Outer Radius < Stator Inner Radius < Rotor Outer Radius < Rotor Inner Radius
```

If the above constraints are not satisfied, the software will display an error message in the log panel and the machine checkpoint will be marked as invalid. The geometry will not be generated until the constraints are satisfied.