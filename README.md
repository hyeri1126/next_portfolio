### 3D Interactive Web Project

## 📝 프로젝트 개요 및 배경
평소 2D 웹의 한계를 넘은 3D 요소를 활용한 인터랙티브 웹에 대한 관심을 바탕으로, **콜로소의 초이인 강의**를 수강하며 해당 프로젝트를 진행하였습니다. 강의를 통해 **디자이너의 관점**에서 3D 모션 그래픽을 이해하고, **개발자의 시각**에서 이를 웹에 구현하는 과정을 체계적으로 3D 인터랙티브 웹 제작 전체 프로세스를 경험할 수 있었습니다.

특히 처음 다뤄보는 C4D로 3D 모델을 직접 제작하고 Three.js로 그래픽 애니메이션을 구현하는 체계적인 과정을 바탕으로 웹 개발의 새로운 기술 역량을 습득할 수 있었습니다. 기존의 웹사이트들이 2D 평면에서 제한된 상호작용만 제공하는 것과 달리, 이 프로젝트에서는 사용자가 3D 공간을 자유롭게 탐색하고 직접 오브젝트를 조작할 수 있는 몰입형 경험을 제공하고자 했습니다.

프로젝트를 진행하면서 직면한 가장 큰 도전은 3D 그래픽의 최적화와 다양한 브라우저/디바이스에서의 일관된 경험 제공이었습니다. 특히 모바일 환경에서의 성능 최적화를 위해 파티클 수 조절, 텍스처 압축, 렌더링 기법 개선 등 다양한 방법을 시도하며 웹 성능 최적화에 대한 깊은 이해를 얻을 수 있었습니다.

이 프로젝트는 단순한 기술 구현을 넘어, 사용자에게 시각적 즐거움과 새로운 상호작용 방식을 제공하는 것을 목표로 했습니다. 웹 브라우저에서도 네이티브 애플리케이션에 버금가는 풍부한 그래픽 경험을 제공할 수 있다는 가능성을 탐구하는 과정이었습니다.


## ✨ 주요 기능
### 1. 3D 오브젝트 색상 커스터마이징 시스템
- 사용자가 3D 오브젝트를 선택하고 원하는 색상으로 변경
- Raycaster를 활용한 오브젝트 선택, Color Picker UI와 연동하여 색상 변경 가능 적용

### 2. 3D 공간 탐색 기능
- PerspectiveCamera와 OrbitControls를 활용한 다양한 시점 제어

### 3. 3D 인터랙티브 파티클 배경 효과
- Three.js의 Particle System 적용, 사용자 마우스 움직임에 반응

## 🛠️ 기술 스택

### 3D 모델링 
**C4D (Cinema 4D)**

### 프론트엔드 개발
**Three.js**,  **GSAP (GreenSock Animation Platform)**, **JavaScript (ES6+)**, **HTML5 & CSS3**

### 개발 환경 및 도구
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

