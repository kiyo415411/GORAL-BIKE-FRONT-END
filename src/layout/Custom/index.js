import { Canvas } from '@react-three/fiber';
import React, { Suspense, useContext, useEffect } from 'react';
import BikeModel from './OBJ/Bike';
import { HexColorPicker } from 'react-colorful';
import { proxy, useSnapshot } from 'valtio';
import { Link } from 'react-router-dom';
import CustomizeForm from './CustomizeForm';
import { Ground } from './Ground';
import { FloatingGrid } from './FloatingGrid';
import useWindowSize from '../../components/hooks/useWindowSize';
import LoadingPage from '../../components/Loading/LoadingPage';
import { useState } from 'react';
import { LoginContext } from '../../utils/useLogin';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import CustomizeUpdate from './CustomizeUpdate';

import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from '@react-three/drei';

export default function Custom() {
  const Data = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(true); //讀取畫面
  const [isData, setIsData] = useState([]); //讀取畫面
  const [show, setShow] = useState(false); //讀取畫面
  const [number, setNumber] = useState(0); //讀取畫面
  const [orderID, setOrderID] = useState(0); //讀取畫面
  const [reRender, setReRender] = useState(false); //讀取畫面
  console.log(Data.isLogin);
  console.log(Data.userData.userId);

  const state = proxy({
    current: null,
    items: {
      Frame_MAT: '#fff',
      Saddle_MAT: '#fff',
      Metal_MAT: '#fff',
      DerailleurRear_MAT: '#fff',
      Crankset_MAT: '#fff',
      Pedal_MAT: '#fff',
      Chain_MAT: '#fff',
      Cage_MAT: '#fff',
      Bottle_MAT: '#fff',
      Brakes_MAT: '#fff',
      PaintBlack_MAT: '#fff',
      Wheels_MAT: '#fff',
      Computer_MAT: '#fff',
      HandlebarTape_MAT: '#fff',
      Shifters_MAT: '#fff',
      Cassette_MAT: '#fff',
    },
  });

  function Picker() {
    const screenWidth = useWindowSize();
    let rwd = screenWidth < 768;
    const snap = useSnapshot(state);
    return (
      <section
        className={
          rwd
            ? `fixed-bottom position-absolute bottom-20 start-35 translate-middle-x`
            : 'fixed-top'
        }
        style={{
          display: snap.current ? 'block' : 'none',
        }}
      >
        <section className="d-md-flex justify-content-start align-items-center">
          <HexColorPicker
            className="m-md-5"
            color={snap.items[snap.current]}
            onChange={(color) => (state.items[snap.current] = color)}
          />
          <h1
            className=""
            style={{
              color: state.items[snap.current],
            }}
          >
            {snap.current}
          </h1>
        </section>
      </section>
    );
  }

  function BikeShow() {
    return (
      <>
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
        <CubeCamera resolution={256} frames={Infinity}>
          {(texture) => (
            <>
              <Environment map={texture} />
              <BikeModel state={state} />
            </>
          )}
        </CubeCamera>
        <ambientLight intensity={0.7} />
        <spotLight
          color={[1, 0.25, 0.7]}
          intensity={1.5}
          angle={0.6}
          penumbra={0.5}
          position={[10, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        <spotLight
          color={[0.14, 0.5, 1]}
          intensity={2}
          angle={0.6}
          penumbra={0.5}
          position={[-10, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />

        <Ground />
        <FloatingGrid />
      </>
    );
  }

  useEffect(() => {
    const getChecks = async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const response = await axios.post(API_URL + '/customize', {
          userID: Data.userData.userId,
        });

        setIsData(response.data.result);
      } catch (e) {
        throw new Error(e);
      }
    };
    Data.isLogin && getChecks();
  }, [Data.isLogin, Data.userData.userId, reRender]);

  useEffect(() => {
    // state.items.Frame_MAT = isData[0].Frame_MAT;
    console.log('number', number);
    // state.items.Frame_MAT = '#123456';
    if (isData.length > 0) {
      state.items.Frame_MAT = isData[number].Frame_MAT;
      state.items.Bottle_MAT = isData[number].Bottle_MAT;
      state.items.Brakes_MAT = isData[number].Brakes_MAT;
      state.items.Cage_MAT = isData[number].Cage_MAT;
      state.items.Chain_MAT = isData[number].Chain_MAT;
      state.items.Cassette_MAT = isData[number].Cassette_MAT;
      state.items.Computer_MAT = isData[number].Computer_MAT;
      state.items.Crankset_MAT = isData[number].Crankset_MAT;
      state.items.DerailleurRear_MAT = isData[number].DerailleurRear_MAT;
      state.items.HandlebarTape_MAT = isData[number].HandlebarTape_MAT;
      state.items.Metal_MAT = isData[number].Metal_MAT;
      state.items.PaintBlack_MAT = isData[number].PaintBlack_MAT;
      state.items.Pedal_MAT = isData[number].Pedal_MAT;
      state.items.Saddle_MAT = isData[number].Saddle_MAT;
      state.items.Shifters_MAT = isData[number].Shifters_MAT;
      state.items.Wheels_MAT = isData[number].Wheels_MAT;
    }

    console.log('state.items', state.items);
  }, [state.items, isData, number]);

  useEffect(() => {
    isData.length > 0 ? setShow(true) : setShow(false);
  }, [isData]);

  console.log(isData);
  setTimeout(() => {
    setIsLoading(false);
  }, 0);
  return isLoading ? (
    <LoadingPage />
  ) : (
    <Suspense fallback={null}>
      <Picker />
      <div className="vh-100 bg-black p-0 m-0">
        <section className="fixed-top d-flex justify-content-end">
          <CustomizeUpdate
            state={state}
            Data={Data}
            orderID={orderID}
            reRender={reRender}
            setReRender={setReRender}
          />
          <CustomizeForm
            state={state}
            Data={Data}
            reRender={reRender}
            setReRender={setReRender}
          />
          <Link
            to="/"
            className="btn btn-black text-muted m-3"
            onClick={() => {
              document.body.style.cursor = '';
            }}
          >
            返回首頁
          </Link>
        </section>

        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <BikeShow />
        </Canvas>
        {show && (
          <ul className="fixed-bottom bg-black list-unstyled row p-0 p-md-3 m-0 gap-md-3 align-items-center text-center bg-opacity-25 justify-content-around text-muted">
            {isData.map((value, index) => {
              return (
                <li
                  className={`col-6 col-md-2 ${
                    index === number ? 'text-white' : 'text-muted'
                  } btn fw-bold`}
                  onClick={() => {
                    setNumber(index);
                    setOrderID(value.orderId);
                  }}
                >
                  方案{index + 1}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Suspense>
  );
}
