    import React, { useRef, useEffect } from 'react';
    import * as THREE from 'three';
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
    import { TextureLoader } from 'three';

    const ThreeScene = () => {
        const mountRef = useRef(null);

        useEffect(() => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setClearColor(0x000000, 0); 
            mountRef.current.appendChild(renderer.domElement);

            const ambientLight = new THREE.AmbientLight(0x757575);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(20, 20, 20);
            scene.add(pointLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(1, 1, 1).normalize();
            scene.add(directionalLight);

            const textureLoader = new TextureLoader();
            const texture = textureLoader.load('/models/house_packed_full.png', (texture) => {
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
            });

            const objLoader = new OBJLoader();
            let model = null;
            objLoader.load('/models/house_packed.obj', (object) => {
                object.traverse((child) => {
                    if (child.isMesh) {
                        child.material.map = texture;
                        child.material.transparent = true; 
                        child.material.opacity = 1.0; 
                        child.material.alphaTest = 0.5; 
                        child.material.needsUpdate = true; 
                    }
                });
                model = object;
                model.scale.set(7, 7, 7); 
                scene.add(model);
            });

            camera.position.set(0, 2, 10);
            camera.lookAt(new THREE.Vector3(0, 2, 0));

            const animate = () => {
                requestAnimationFrame(animate);
                if (model) {
                    model.rotation.y += 0.01; 
                }
                renderer.render(scene, camera);
            };
            animate();

            return () => {
                mountRef.current.removeChild(renderer.domElement);
            };
        }, []);

        return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
    };

    export default ThreeScene;