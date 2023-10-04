import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { Button } from "../../../components/atoms/Button";
import { Label } from "../../../components/atoms/Label";
import { RootState } from "../../redux/configureStore";

export const WeatherPage = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.wether);

  return (
    <Layout>
      <Label title={"placeHolder"} userColor="error" />
    </Layout>
  );
};

const Layout = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
