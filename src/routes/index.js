import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddLocation from "../components/AddLocation"
import Welcome from "../components/Welcome"
import AddPicture from "../components/AddPicture"
import AddComments from "../components/AddComments"

const Stack = createNativeStackNavigator()

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name="AddLocation" component={AddLocation} options={{ title: 'Adicionar local' }}/>
      <Stack.Screen name="AddPicture" component={AddPicture} options={{ title: 'Adicionar imagem' }}/>
      <Stack.Screen name="AddComments" component={AddComments} options={{ title: 'Adicionar observação' }}/>
    </Stack.Navigator>
  )
}