#!/usr/bin/env node

// const SDL = require('sdl');
const SDL = require('./src/SDL.js');


SDL.init(SDL.INIT.everything);


let window   = SDL.createWindow('Hello World', 100, 100, 640, 480, SDL.WINDOW.shown | SDL.WINDOW.resizable);
let renderer = SDL.createRenderer(window, -1, SDL.RENDERER.accelerated);
let texture  = SDL.createTexture(renderer, __dirname + '/test.png');

let dst = new SDL.Rect({
	x: 32,
	y: 32,
	w: 128,
	h: 128
});



let fx = 1;
let fy = 1;
let r  = 64;
let g  = 64;
let b  = 80;
let a  = 255;
let randomize = false;


setInterval(function() {

	if (randomize === true) {

		r = Math.random() * 255 | 0;
		g = Math.random() * 255 | 0;
		b = Math.random() * 255 | 0;
		a = Math.random() * 255 | 0;

		randomize = false;

	}

	if (dst.x <= 0 || dst.x >= (800 - 128)) fx = -1 * fx;
	if (dst.y <= 0 || dst.y >= (600 - 128)) fy = -1 * fy;

	dst.x = dst.x + fx * 5;
	dst.y = dst.y + fy * 5;


	SDL.setRenderDrawColor(renderer._ref, r, g, b, a);


	SDL.renderClear(renderer._ref);
	SDL.renderCopy(renderer._ref, texture._ref, null, dst.ref());
	SDL.renderPresent(renderer._ref);



	// let event  = new SDL_events.SDL_Event;
	// let quit   = false;
	// let result = SDL_events.SDL_PollEvent(event.ref());
	// if (result) {

	// 	if (event.type === SDL_events.SDL_EventType.SDL_QUIT) {

	// 		quit = true;

	// 	} else if (event.type === SDL_events.SDL_EventType.SDL_MOUSEMOTION) {

	// 		randomize = !randomize;

	// 		console.log(event.motion.x, event.motion.y);

	// 	}



	// 	if (quit === true) {
	// 		clearInterval(main);
	// 	}

	// }

}, 1000 / 60);

