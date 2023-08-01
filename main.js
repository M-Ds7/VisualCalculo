
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r133/three.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene, camera, renderer, controls;
let cuerpoAvion, alaIzquierda, alaDerecha, colaAvion;
let animationStarted = false;

function init() {
    //configuracion de la esena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Añadir iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true; // Emitir sombras
    scene.add(directionalLight);

    //creacion del avion
    createPlane();

    // Ajustar la posición y dirección de la cámara
    camera.position.set(3, 3, 10);
    camera.lookAt(0, 0, 0);

    // Agregar controles para mover la cámara
    controls = new OrbitControls(camera, renderer.domElement);

    // Manejar redimensionamiento de ventana
    window.addEventListener("resize", handleWindowResize);

    // Agregar evento clic para comenzar la animación
    document.addEventListener("click", startAnimationOnClick);

    // Renderizar la escena
    animate();
}

function createPlane() {
    // Crea el cuerpo del avión (cilindro)
    const cuerpoAvionGeometry = new THREE.CylinderGeometry(0.2, 0.2, 3, 32);
    const cuerpoAvionMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
    cuerpoAvion = new THREE.Mesh(cuerpoAvionGeometry, cuerpoAvionMaterial);
    cuerpoAvion.castShadow = true; // Emitir sombras
    scene.add(cuerpoAvion);

    // Crea las alas del avión (paralelepípedo)
    const alaGeometry = new THREE.BoxGeometry(1, 0.1, 3);
    const alaMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
    alaIzquierda = new THREE.Mesh(alaGeometry, alaMaterial);
    alaDerecha = new THREE.Mesh(alaGeometry, alaMaterial);
    alaIzquierda.position.set(-1.25, -1.5, 0);
    alaDerecha.position.set(1.25, -1.5, 0);
    alaIzquierda.castShadow = true; // Emitir sombras
    alaDerecha.castShadow = true; // Emitir sombras
    scene.add(alaIzquierda, alaDerecha);

    // Crea la cola del avión (cono)
    const colaGeometry = new THREE.ConeGeometry(0.3, 1, 32);
    const colaMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
    colaAvion = new THREE.Mesh(colaGeometry, colaMaterial);
    colaAvion.position.set(0, 0, -1.75);
    colaAvion.castShadow = true; // Emitir sombras
    scene.add(colaAvion);
}

function handleWindowResize() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
}

function animate() {
    requestAnimationFrame(animate);

    if (animationStarted) {
        // Aumenta la posición del avión en el eje Y para simular el despegue
        cuerpoAvion.position.y += 0.1;
        alaIzquierda.position.y += 0.1;
        alaDerecha.position.y += 0.1;
        colaAvion.position.y += 0.1;
    
        // Rota las alas y la cola durante el despegue para simular el ascenso
        alaIzquierda.rotation.z += 0.01;
        alaDerecha.rotation.z -= 0.01;
        colaAvion.rotation.x += 0.02;
    }

    // Actualizar los controles de la cámara
    controls.update();

    // Renderizar la escena
    renderer.render(scene, camera);
}

function startAnimationOnClick() {
    animationStarted = true;
}

init();