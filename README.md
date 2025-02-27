# 3D Interactive Web Project

## 📝 프로젝트 개요 및 배경
평소 2D 웹의 한계를 넘은 3D 요소를 활용한 인터랙티브 웹에 관심이 있어, 콜로소의 초이인 강의를 수강하며 이 프로젝트를 진행했습니다. 3D 모델링부터 웹 구현까지 전체 과정을 경험하며, C4D로 직접 모델링하고 Three.js로 웹에서 구현했습니다.
사용자가 3D 공간을 자유롭게 탐색하고 오브젝트와 상호작용할 수 있는 몰입형 경험을 제공하는 것이 목표였으며, 모바일 환경에서도 최적화된 성능을 위해 다양한 렌더링 최적화 기법을 적용했습니다.


## ✨ 주요 기능
### 1. 3D 오브젝트 색상 커스터마이징 시스템
- 사용자가 3D 오브젝트를 선택하고 원하는 색상으로 변경
- Raycaster를 활용한 오브젝트 선택, Color Picker UI와 연동하여 색상 변경 가능 적용

### 2. 3D 공간 탐색 기능
- PerspectiveCamera와 OrbitControls를 활용한 다양한 시점 제어

### 3. 3D 인터랙티브 파티클 배경 효과
- Three.js의 Particle System 적용, 사용자 마우스 움직임에 반응

## 🛠️ 기술 스택
**C4D (Cinema 4D)**, 
**Three.js**,  **GSAP (GreenSock Animation Platform)**, **JavaScript (ES6+)**, **HTML5 & CSS3**,
**Webpack**, **Git/GitHub**


## 📋 구현 상세
### Three.js 기반 3D 렌더링 시스템
```javascript
// Scene, Camera, Renderer 초기화
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// 렌더러 설정
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// OrbitControls 설정
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 5;
controls.maxDistance = 50;
controls.maxPolarAngle = Math.PI / 2;
```

### Raycaster를 활용한 오브젝트 인터랙션

```javascript
// Raycaster 초기화
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// 마우스 이벤트 리스너
window.addEventListener('click', (event) => {
  // 화면 좌표를 정규화된 장치 좌표로 변환
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  // Raycasting 수행
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(selectableObjects);
  
  if (intersects.length > 0) {
    const object = intersects[0].object;
    // 선택된 오브젝트 처리
    selectObject(object);
  }
});

// 오브젝트 선택 및 색상 변경 함수
function selectObject(object) {
  selectedObject = object;
  colorPicker.style.display = 'block';
  // 현재 선택된 오브젝트 하이라이트 처리
  highlightSelectedObject();
}
```

### GSAP 기반 애니메이션 시스템
```javascript
// 카메라 시점 애니메이션
function animateCameraToPosition(position, target, duration = 2) {
  gsap.to(camera.position, {
    x: position.x,
    y: position.y,
    z: position.z,
    duration: duration,
    ease: "power2.inOut",
    onUpdate: function() {
      controls.update();
    }
  });
  
  gsap.to(controls.target, {
    x: target.x,
    y: target.y,
    z: target.z,
    duration: duration,
    ease: "power2.inOut",
    onUpdate: function() {
      controls.update();
    }
  });
}

// UI 요소 애니메이션
function animateUIElements() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  gsap.from(menuItems, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out"
  });
}
```

### Three.js Particle System 구현
```javascript
// 파티클 시스템 생성
function createParticleSystem() {
  const particleCount = 5000;
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 100;
    positions[i + 1] = (Math.random() - 0.5) * 100;
    positions[i + 2] = (Math.random() - 0.5) * 100;
  }
  
  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    transparent: true,
    opacity: 0.8,
    map: particleTexture,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  
  particleSystem = new THREE.Points(particles, particleMaterial);
  scene.add(particleSystem);
}

// 파티클 애니메이션
function animateParticles() {
  const positions = particleSystem.geometry.attributes.position.array;
  const time = Date.now() * 0.0001;
  
  for (let i = 0; i < positions.length; i += 3) {
    positions[i + 1] += Math.sin(time + positions[i]) * 0.01;
  }
  
  particleSystem.geometry.attributes.position.needsUpdate = true;
}
```
## 🌟 성장 포인트
1. 3D 인터랙티브 웹 개발의 전체 제작 과정 이해
2. WebGL 쉐이더를 활용한 고급 시각 효과 추가

## 회고
