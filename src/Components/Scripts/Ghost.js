import React from 'react';
import { Image } from 'semantic-ui-react'

const Rules1 = () => <>
	<h2>RULES: Trick or Treat!</h2>
	<p> Choose a creature on the list. You have to go trick or treating until you find them! </p>
	<p> Drink every time you open a door and the wrong creature is there. When you find your creature, drink the number of sips on the creature. </p>
	<p> You get five points if you find them within three tries. </p>
	<p> Rearrange the creatures after your turn. </p>
	<h3>Advantage: Ghosts</h3>
	<p>They get one extra try</p>
	<h3>Disadvantage: Werewolves</h3>
	<p> Dogs aren't supposed to have chocolate. They get two tries only</p>
	Write 'trick' when you're finished
	</>

const Rules2 = () => <>
	<h2>RULES: Telepathy</h2>
	<p> One member from each team take a paper from the bucket. You have one minute to succeed. You get 5 points per correct. </p>
	<h3>Advantage: Ghosts</h3>
	<p>They get an extra 15 seconds</p>
	<h3>Disadvantage: Witches</h3>
	<p> Only 45 seconds to act </p>
	<p>Write 'ghost' when you're finished</p>
	</>

const dialogue = (code) => [
	{text:"Wooooooooo"},
	{text:"Hello friends! Are you ready to have some fun?"},
	{text:"First! Let's go trick or treating!"},
	{text: Rules1, isObject: true, input:"trick"},
	{text:"Yay! I hope you got some treats!"},
	{text:"...."},
	{text:"....!"},
	{text:"....?"},
	{text:"Oh sorry! I forgot not everyone can talk telepathically! You guys should practice!"},
	{text: Rules2, isObject: true, input:"ghost"},
	{text: "............"},
	{text: "Still can't hear me huh? You'll get the hang of it eventually!"},
	{text: "Write 'next' when you're in the main room", input:"next"},
	]

export default dialogue