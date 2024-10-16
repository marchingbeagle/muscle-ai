import React from "react";
import { View, Text, Image } from "react-native";
import { router } from "expo-router";
import { Button } from "src/components/Button";
import logo from "../../../assets/logo.png";

export default function Welcome() {
  return (
    <View className="flex items-center justify-around h-full">
      <View className="flex items-center justify-center">
        <Image source={logo} className="w-40 h-40" />
        <Text className="text-3xl font-bold">Bem vindo ao Muscle AI</Text>
        <Text className="text-sm font-bold">
          Seu parceiro para geração de treinos
        </Text>
      </View>
      <View className="flex ">
        <Button
          label="Começe os treinos"
          onPress={() => {
            router.navigate("/signin");
          }}
          className="px-24 text-white bg-green-800 rounded-full h-14 color-white"
        />
      </View>
    </View>
  );
}
