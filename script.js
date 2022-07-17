import * as THREE from "three";
import {OrbitControls} from "OrbitControls";

class App{
	constructor(){
		this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );
		this.camera.position.set( 7, 0, 2 );
        
		const ambient = new THREE.HemisphereLight(0xffff66, 0xbbbbff, 0.2);
        
        const light = new THREE.DirectionalLight();
        light.position.set( 0.1, 1, 1);
			
		this.renderer = new THREE.WebGLRenderer({ antialias: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );

        const container = document.createElement( 'div' );
		document.body.appendChild( container );
		container.appendChild( this.renderer.domElement );
		
        const geometry = new THREE.DodecahedronGeometry(1, 0);
        const material = new THREE.MeshStandardMaterial( { color: 0xFF0000 });

        this.mesh = new THREE.Mesh( geometry, material );
        
		this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xAAAAAA );
        this.scene.add(this.mesh);
		this.scene.add(ambient);
        this.scene.add(light);
        
        const controls = new OrbitControls( this.camera, this.renderer.domElement );
        
        this.renderer.setAnimationLoop(this.render.bind(this));
    
        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );  
    }
    
	render( ) {   
        this.mesh.rotateY( 0.01 );
        this.renderer.render( this.scene, this.camera );
    }

    recolor( col ) {
        this.mesh.material = new THREE.MeshStandardMaterial( { color: col });
    }
}

export { App };
