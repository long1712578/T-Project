import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-body-first',
  templateUrl: './body-first.component.html',
  styleUrls: ['./body-first.component.scss']
})
export class BodyFirstComponent implements OnInit {

  @ViewChild('bodyFirst', { static: true }) bodyFirst!: ElementRef;
  carouselItems = [
    {images:'assets/11-nam.jpg',des:'Tdesk chúc mừng sinh nhật công ty'},
    {images:'assets/sinh-nhat-hang-thang.jpg',des:'Tdesk chúc mừng sinh nhật công ty'},
    {images:'assets/team-buding.jpg',des:'Tdesk chúc mừng sinh nhật công ty'},
    {images:'assets/trung-thu.jpg',des:'Tdesk chúc mừng sinh nhật công ty'}
  ]
  
  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    

    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth-100, window.innerHeight-100);
    // renderer.setClearColor( 0xffffff, 0 );
    // this.renderer2.appendChild(this.bodyFirst.nativeElement, renderer.domElement);
    // //document.body.appendChild(renderer.domElement);
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // const animate = function () {
    //   requestAnimationFrame(animate);

    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;

    //   renderer.render(scene, camera);
    // };
    // camera.position.z = 5;
    // renderer.render(scene, camera);
    // animate();
    // true if the url has the `?debug` parameter, otherwise false

  }

}