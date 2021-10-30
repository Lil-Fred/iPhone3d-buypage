let scene, camera, renderer, controls, model;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("phone_div").appendChild(renderer.domElement);
  renderer.domElement.id = "3ddom";
  renderer.domElement.classList.add("off");

  //  3D to X SPAN 
  const imgTomodel = document.createElement('span');
  imgTomodel.classList.add('spanToggle')
  imgTomodel.innerText = '3D';

  const iphone_img = document.getElementById("iphone-img");
  const iPhone3D = document.getElementById("3ddom");

  imgTomodel.addEventListener("click", function () {
    if (imgTomodel.innerText === '3D') {
      imgTomodel.innerText = '✖'
    } else {
      imgTomodel.innerText = '3D'
    }
    iPhone3D.classList.toggle("off");
    iphone_img.classList.toggle("off");
  })

  if (window.innerWidth <= 900) {
    document.getElementById("displaced_div").insertAdjacentElement('beforeend', imgTomodel);
    imgTomodel.addEventListener("click", function () {
      document.querySelector(".buy_sec").style = "padding-right: 0rem;"
      model.position.set(0, 0, 0);
      model.scale.set(2.8, 2.8, 2.8);
    })

  } else {
    document.getElementById("phone_div").insertAdjacentElement('beforebegin', imgTomodel);
    imgTomodel.addEventListener("click", function () {
      document.querySelector(".buy_sec_div1").style = "margin-right: 0rem; "
      document.querySelector(".buy_sec").style = "padding-right: 9rem;"
    })
  }

  //CAMERA
  camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1 , 5000);
  camera.position.set(1, 1, 3);
  //adjust camera-zoom

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

   //CONTROLS
  controls = new THREE.OrbitControls(camera, renderer.domElement);


  //iPhone MODEL
  new THREE.GLTFLoader().load(
    "model/scene.glb",
    (result) => {
      model = result.scene.children[0];
      model.scale.set(3.3, 3.3, 3.3);
      model.position.set(.4, 0, 0);
      scene.add(model);

    }
  );

  // LIGHTS
  var ambientLight = new THREE.AmbientLight(0xffffff, .3);
  scene.add(ambientLight);

  let light1 = new THREE.PointLight(0xffffff, 3);
  light1.position.set(0, 300, 500);
  scene.add(light1);

  let light2 = new THREE.PointLight(0xffffff, 3);
  light2.position.set(500, 100, 0);
  scene.add(light2);

  let light3 = new THREE.PointLight(0xffffff, 3);
  light3.position.set(0, 100, -500);
  scene.add(light3);

  let light4 = new THREE.PointLight(0xffffff, 3);
  light4.position.set(-500, 300, 0);
  scene.add(light4);


  const hemilight = new THREE.HemisphereLight(0x8C9EB4, 0xC0DCF8, 3);
  scene.add(hemilight);

  animate();
}



function animate() {
  requestAnimationFrame(animate);
  // Update();
  renderer.render(scene, camera);
}
init();
