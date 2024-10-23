#define GLSLIFY 1
float exponentialInOut(float t) {
  return t == 0.0 || t == 1.0
    ? t
    : t < 0.5
      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;
}

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

// Manual antialias of the Plane geometry.... *sigh*

// Must be a more smart way :)
float antialiasPlane(vec2 uv) {

  uv = (2.0 * uv - 1.0); // -1.0 .. 1.0

  // mask each side
  float topMask = 1.0 - uv.y;
  float bottomMask = uv.y + 1.0;
  float leftMask = uv.x + 1.0;
  float rightMask = 1.0 - uv.x;

  // combine masks
  float squareMask = topMask * bottomMask * leftMask * rightMask;

  // calc antialias
  #if __VERSION__ == 300
    float delta = fwidth(squareMask) * 1.14;
    return smoothstep(0.0, 0. + delta, squareMask);
  #else
    return 1.0;
  #endif
}

// uniform float u_time;
uniform float u_transitionTime;
uniform float u_imgOpacity;
uniform float u_pixelRatio;
uniform float u_imgZoom;
uniform vec3 u_color;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_blobEffect;
uniform vec2 u_planeSize;
uniform sampler2D u_texture;
uniform float u_hasTexture;
uniform float u_inViewport;

varying vec2 v_uv;
varying float v_bn;
varying float v_tn;

float circle(in vec2 _st, in float _radius, in float blurriness){
  vec2 dist = _st;
  return 1.-smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist)*4.0);
}

//---------------------------------------------------------
// draw rounded rectangle http://glslsandbox.com/e#43292.1
//---------------------------------------------------------
float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness)
{
  float d = length(max(abs(uv - pos), size) - size) - radius;
  return smoothstep(0.8, 0.2, d / thickness * 5.0);

}

void main() {

  float delay = 0.0;
  float progress = exponentialInOut(min(1.0, max(0.0, (u_transitionTime - delay) * 0.85)));

  // Zoom image by modifying original UV
  float parallaxSize = 0.1;
  vec2 parallaxZoom = v_uv * (1.0 - parallaxSize) + 0.5 * parallaxSize;
  vec2 uvZoom = mix(parallaxZoom, v_uv * .85 + 0.5 * 0.15, max(1. -progress, u_imgZoom));

  vec2 uv = uvZoom;

  // Parallax image in Y-axis on scroll
  uv.y += parallaxSize * 0.5 + u_inViewport * -parallaxSize;

  // sample image color
  vec4 image = texture2D(u_texture, uv, -1.0);

  // Get pixel coordinate
  vec2 res = u_res * u_pixelRatio;
  float ratio = u_res.y / u_res.x;

  vec2 pos = gl_FragCoord.xy / res.xy - vec2(0.5);
  vec2 st = vec2(pos.xy);
  st.y *= ratio; // adjust to screen aspect ratio

  ////////////////////////////////
  // BLOB
  ////////////////////////////////

  // We readjust the mouse coordinates
  vec2 mouse = u_mouse * -.5;
  mouse.y *= ratio; // adjust to screen aspect ratio
  vec2 mousePos = st + mouse;

  // u_blobEffect is 0.3 at center 1.0 at edge
  float effect = clamp(u_blobEffect, 0.0, 1.0);
  float size = mix(0.0, .1, smoothstep(0.0, 1.0, u_blobEffect));
  float blur = mix(0.6, 0.6, smoothstep(0.3, 1.0, u_blobEffect));

  // create circular mask
  float c = circle(mousePos, size, blur) * 2.6;

  // Noise mask
  float blobNoise = v_bn - 1.0; // MUCH FASTER to do noise in vertex shader instead

  // ANTIALIAS BLOB
  float finalMask = 0.;
  #if __VERSION__ == 300
    float mask = blobNoise + c;
    float delta = fwidth(mask) * 1.5;
    finalMask = smoothstep(.5 - delta, 0.5, mask);
  #else
    finalMask = smoothstep(0.45, 0.5, blobNoise + c);
  #endif

  ////////////////////////////////

  // Show loading color or image
  vec3 loadingColor = vec3(0.9, .9, .9);
  vec3 finalColor = loadingColor;
  if (u_hasTexture == 1.0) {
    finalColor = mix(loadingColor, image.rgb, u_imgOpacity);
  }
  finalColor = mix(finalColor, u_color, finalMask);

  // ANTIALIAS plane geometry
  float squareMask = antialiasPlane(v_uv);

  // blob grow transition mask
  float transitionNoise = v_tn - 1.0; // MUCH FASTER to do noise in vertex shader instead
  vec2 uvMask = (2.0 * v_uv - 1.0); // -1.0 .. 1.0
  float planeRatio = u_planeSize.y / u_planeSize.x;

  float growSize = mix(0.66, 1.0, progress);
  float growBlur = mix(2., .00001, progress);
  float transitionMask = roundedRectangle(uvMask, vec2(0., 0.), vec2(growSize), 0., growBlur) * 2.6;
  squareMask *= smoothstep(0.45, 0.5, transitionMask + transitionNoise);

  vec4 finalImage = vec4(finalColor, squareMask);
  gl_FragColor = finalImage;
}
