let scene, camera, renderer, controls, model;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("phone_div").appendChild(renderer.domElement);
  renderer.domElement.id = "3ddom";
  renderer.domElement.classList.add("off");

   const imgTo3d = document.createElement('button');
  imgTo3d.classList.add('btnToggle')
  imgTo3d.textContent +='3d';
  document.getElementById("phone_div").insertAdjacentElement("afterbegin", imgTo3d);
   imgTo3d.addEventListener("click", function () {
    iPhone3D.classList.toggle("off");
     iphone_img.classList.toggle("off");
    if (window.innerWidth <= 900) {
      // document.querySelector(".buy_sec_div1").style = "margin-right: 0rem; "
      document.querySelector(".buy_sec").style = "padding-right: 0rem;"
      model.position.set(0, 0, 0); 
      model.scale.set(2.8, 2.8, 2.8);
      // alert("This is a mobile device.");
    } else {
      document.querySelector(".buy_sec_div1").style = "margin-right: 0rem; "
     document.querySelector(".buy_sec").style = "padding-right: 9rem;"
      // alert("This is a tablet or desktop.");
    }
    // document.querySelector(".buy_sec").style = ""

   // alert("Model Loaded");
  });

  document.getElementById("forimg").addEventListener("click", function () {
    iPhone3D.classList.add("off");
    iphone_img.classList.remove("off");
   // alert("Image loaded");
  });

    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.set(1, 1, 3);
    //adjust camera-zoom
  
    window.addEventListener("resize", function () {
      var width = window.innerWidth;
      var height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    controls = new THREE.OrbitControls(camera, renderer.domElement);


  const iphone_img = document.getElementById("iphone-img");
  const iPhone3D = document.getElementById("3ddom");


  // renderer.shadowMap.enabled = true;
  // renderer.gameOutput = true

  scene.add(new THREE.AxesHelper(500));

  var floorMaterial = new THREE.MeshBasicMaterial({
    color: 0xc35411,
    side: THREE.DoubleSide,
  });
  var floorGeometry = new THREE.PlaneGeometry(10, 10, 1, 1);
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.position.y = -0.5;
  floor.rotation.x = Math.PI / 2;
  // Note the mesh is flagged to receive shadows
  floor.receiveShadow = true;
 // scene.add(floor);

  new THREE.GLTFLoader().load(
    "scene.glb",
    (result) => {
      model = result.scene.children[0];
      model.scale.set(3.3, 3.3, 3.3);
      model.position.set(.4, 0, 0);
      scene.add(model);
      
      animate();
    }
    );
    
    var ambientLight = new THREE.AmbientLight( 0xffffff, .3 );
    scene.add( ambientLight );

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
}

// if (window.innerWidth <= 900) {
//   var Start = function () {
//     camera.position.set(0, 0, 3.5);
//     //  scene.background = new THREE.Color(0x88888);
//   };
  
//   // alert("This is a mobile device.");
// } else {
//   var Start = function () {
//     camera.position.set(0, 0, 3);
 
//   };

//   // alert("This is a tablet or desktop.");
// }


// let frame = 0;
// var Update = function () {
//   if (frame == 0) {
//     Start();
//     frame += 1;
//   }
// };

function animate() {
  requestAnimationFrame(animate);
  // Update();
  renderer.render(scene, camera);
}
init();
