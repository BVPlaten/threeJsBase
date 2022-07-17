import * as THREE from "three";
import {OrbitControls} from "OrbitControls";

class App{
	constructor(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 3;

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setAnimationLoop(this.render.bind(this));
        document.body.appendChild( this.renderer.domElement );
	}

	render( ) {   
        this.cube.rotateY( 0.01 );
        this.renderer.render( this.scene, this.camera );
    }
}

export { App };