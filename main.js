import * as THREE from 'three';
import { ArcballControls } from 'three/addons/controls/ArcballControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
const axesHelper = new THREE.AxesHelper( 5 );
const controls = new ArcballControls( camera, renderer.domElement, scene );

scene.add( cube );
scene.add( axesHelper );

camera.position.z = 5;

controls.addEventListener( 'change', function () {

	renderer.render( scene, camera );

} );



function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	controls.update();
	renderer.render( scene, camera );
}

animate();