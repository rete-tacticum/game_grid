# Grid Game: the ICE breaker

![workflow badge](https://github.com/rete-tacticum/game_grid/actions/workflows/pages.yml/badge.svg)

![jones, the cyber dolphin](https://i.imgur.com/3BFZIOc.jpeg)
<a href="https://rete-tacticum.github.io/game_grid">$> PLAY GRIDGAME</a>


## :how to play:
You are the Netrunner.

- ICE unfolds on your cyberdeck screen as 2D matrix of hex codes. Your high-tier hardware already made the routine part of the work, calculated different attack vectors. You can see it on the right of your screen, marked as "routes traced"

- Navigating the matrix is sometimes tricky. At the first step you can move only in vertical direction. Any select will switch move axis, from vertical to horizontal and so on

- For successfull hacking - any traced sequence (or all of them) should be repeated in **any place** of your backtrace solution buffer. You can start with any symbol (or symbols) if entry point to your sequence is inaccessible

- Remember - the ICE is adaptive and ruthless, you won't have much time. Before breaking you can probe the ICE by hovering your mouse over traced cells - it will highlight selected hex code on the matrix field. Plan your moves. At the moment you touch the ICE - the hints will be disabled and you'll be on your own

**Burn'em, Cowboy!**

## :controls:

`W` | `Arrow Up` - move up (only vertical mode)\
`S` | `Arrow Down` - move down (only vertical mode)\
`A` | `Arrow Left` - move left (only horizontal mode)\
`D` | `Arrow Right` - move right (only horizontal mode)\
`Enter` - select cell (and switch movement mode)\
`Mouse` - navigate the interface

---

## :setup project for tinkering:

`make start` - start dev container\
`make stop` - full stop\
`make run <cmd>` - run `npm run <cmd>` inside docker container\
`make docker-build` - build or rebuild container without cache and with volume cleaning
