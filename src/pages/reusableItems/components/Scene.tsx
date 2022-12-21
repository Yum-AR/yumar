/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Engine, Scene } from 'babylonjs';
import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';

const SceneComponent: NextPage<any> = (props) => {
  const reactCanvas: any = useRef(null);
  const {
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    sceneOptions,
    onRender,
    width,
    height,
    onSceneReady,
    ...rest
  } = props;
  let x;
  useEffect(() => {
    if (reactCanvas.current) {
      x = window.matchMedia(`(max-width: 1024px)`);
      if (x.matches) {
        reactCanvas.current.width = `450`;
        reactCanvas.current.height = `450`;
      } else {
        reactCanvas.current.width = width;
        reactCanvas.current.height = height;
      }
      const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
      const scene = new Scene(engine, sceneOptions);
      scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

      if (scene.isReady()) {
        onSceneReady(scene);
      } else {
        scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
      }

      engine.runRenderLoop(() => {
        if (typeof onRender === `function`) {
          onRender(scene);
        }
        scene.render();
      });

      const resize = () => {
        scene.getEngine().resize();
      };

      if (window) {
        window.addEventListener(`resize`, resize);
      }

      return () => {
        scene.getEngine().dispose();

        if (window) {
          window.removeEventListener(`resize`, resize);
        }
      };
    }
  }, [ reactCanvas, x ]);

  return <canvas ref={reactCanvas} {...rest} />;
};
export default SceneComponent;
