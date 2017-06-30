### An open-source multiplayer game

Wander is a project that I worked on during 6 months with a classmate.

Our goal was to create an open-source multiplayer game using modern web technologies.

This game sets you up in a 2d environment where you can meet friends, buy virtual houses and play a virtual job such as policeman.

We integrated game mechanics such as collision, rain and time of day with the use of the Javascript library [Phaser](https://phaser.io/)

The main difficulty for this project was to synchronize every players to provide smooth gameplay. We achieved this using fast websockets and positiion interpolation for players.

We also ported the game to mobile using [Libgdx](https://libgdx.badlogicgames.com/), a cross-platform Java game development framework. This way, mobile and desktop users are allowed to play together on the same map, at the same time.