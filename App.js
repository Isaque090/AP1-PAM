
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import {DadosPessoais} from './Telas/Dados';
import {ExperienciaAcademicas } from './Telas/Experiencia-academica';
import {StatusBar} from 'expo-status-bar';
import {Competencias} from './Telas/competencias-tecnicas';
import {ExperienciaProfissional} from './Telas/Experiencia-Profissional';

const Tab= createBottomTabNavigator();

 export default function App(){
   return(
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
<Tab.Screen name="Dados Pessoais" component={DadosPessoais} options={{
  tabBarLabel:'Dados Pessoais',
  tabBarIcon:({color,size})=>{
return <Ionicons name="person" size={size} color={color} />
  } 
}}/>
<Tab.Screen name="Competencias Tecnicas" component={Competencias}
options={{
  
  tabBarIcon:({color,size})=>{
return  <FontAwesome name="code" size={size} color={color} />
  } 
}}
/>
<Tab.Screen name="Experiencias academicas" component={ExperienciaAcademicas}
options={{
  tabBarIcon:({color,size})=>{
return <FontAwesome name="graduation-cap" size={size} color={color} />
  } 
  }}
/>

<Tab.Screen name="Experiencias Profissionais" component={ExperienciaProfissional}
options={{
  tabBarIcon:({color,size})=>{
return <Ionicons name="briefcase" size={size} color={color} />
  } 
  }}
/>

     </Tab.Navigator>
       <StatusBar
  backgroundColor="#fff"
  barStyle="light-content"
/>
    </NavigationContainer>
   );
 }
 