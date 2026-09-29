---
sidebar_position: 1
title: Sliding Mesh
---
# Sliding Mesh Mechanism
The sliding mesh mechanism is used to simulate the interaction between the rotor and the stator in rotating machines. It allows for the simulation of the rotor's movement relative to the stator, which is essential for accurate transient analysis in applications like electric motors and generators.

In this mechanism, the rotor moves in discrete steps, each equal to the sliding angle. The sliding angle is determined by the number of tangential divisions along the airgap line. These divisions are specified in the [Mesh](https://emsolution-ssil.github.io/eMotorSolutionDoc/docs/docs/mesh) milestone:

$$
\begin{align*}
\theta_{\text{sliding}} &= \frac{360^\circ}{\text{Total Number of Tangential Divisions}} \\&= \frac{360^\circ \times \text{Number of Meshed Poles}}{\text{Number of Tangential Divisions} \times \text{Number of Poles}}
\end{align*}
$$
The rotor angle, $\theta_{\text{rotor}}$, is an integer multiple of the sliding angle. 
$$
\theta_{\text{rotor}} = m \cdot \theta_{\text{sliding}} \quad \text{where } m \in \mathbb{Z}
$$

# Rotor Speed and Time Step
The rotor speed, $N$, is defined in revolutions per minute (rpm). The minimum time step, $\Delta t$, is calculated based on the rotor speed and the sliding angle:
$$
\Delta t = \frac{\theta_{\text{sliding}}}{N \times 60}
$$
This formula ensures that the minimum time step corresponds to the rotor's movement by one sliding angle, allowing for accurate simulation of the rotor's dynamics.
# Example Calculation
For an 8 pole machine and a rotor speed of 1000 rpm and 1 meshed pole with 90 tangential divisions, the sliding angle is:
$$
\theta_{\text{sliding}} = \frac{360^\circ \times 1}{90 \times 8} = 0.5^\circ   
$$
The minimum time step is calculated as:
$$
\Delta t = \frac{0.5^\circ}{1000 \times 60} = \frac{1}{12}\times 10^{-5} \text{ sec}
$$
This means that the rotor will move 0.5 degrees every $\Delta t$ seconds in the simulation, allowing for precise tracking of the rotor's position relative to the stator.

<p class="ems">![sliding_example](./img/sliding_example.png)</p>
