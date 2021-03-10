(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{423:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(6),i=(n(0),n(510)),r={id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},c={unversionedId:"tab-based-navigation",id:"version-2.x/tab-based-navigation",isDocsHomePage:!1,title:"Tab navigation",description:"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header).",source:"@site/versioned_docs/version-2.x/tab-based-navigation.md",slug:"/tab-based-navigation",permalink:"/docs/2.x/tab-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/tab-based-navigation.md",version:"2.x",sidebar_label:"Tab navigation",sidebar:"version-2.x-docs",previous:{title:"Limitations",permalink:"/docs/2.x/limitations"},next:{title:"Drawer navigation",permalink:"/docs/2.x/drawer-based-navigation"}},s=[{value:"Minimal example of tab-based navigation",id:"minimal-example-of-tab-based-navigation",children:[]},{value:"Customizing the appearance",id:"customizing-the-appearance",children:[]},{value:"Jumping between tabs",id:"jumping-between-tabs",children:[]},{value:"A stack navigator for each tab",id:"a-stack-navigator-for-each-tab",children:[]},{value:"Why do we need a TabNavigator instead of TabBarIOS or some other component?",id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component",children:[]},{value:"A tab navigator contains a stack and you want to hide the tab bar on specific screens",id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",children:[]},{value:"A tab icon that doesn&#39;t navigate",id:"a-tab-icon-that-doesnt-navigate",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header)."),Object(i.b)("p",null,"This guide covers ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.x/bottom-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createBottomTabNavigator")),". You may also use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.x/material-bottom-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createMaterialBottomTabNavigator"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.x/material-top-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createMaterialTopTabNavigator"))," to add tabs to your application."),Object(i.b)("h2",{id:"minimal-example-of-tab-based-navigation"},"Minimal example of tab-based navigation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { Text, View } from 'react-native';\nimport { createBottomTabNavigator } from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n      </View>\n    );\n  }\n}\n\nexport default createBottomTabNavigator({\n  Home: HomeScreen,\n  Settings: SettingsScreen,\n});\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/basic-tabs",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("h2",{id:"customizing-the-appearance"},"Customizing the appearance"),Object(i.b)("p",null,"This is similar to how you would customize a stack navigator ","\u2014"," there are some properties that are set when you initialize the tab navigator and others that can be customized per-screen in ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// You can import Ionicons from @expo/vector-icons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\nimport { createBottomTabNavigator } from 'react-navigation';\n\nexport default createBottomTabNavigator(\n  {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n  {\n    navigationOptions: ({ navigation }) => ({\n      tabBarIcon: ({ focused, horizontal, tintColor }) => {\n        const { routeName } = navigation.state;\n        let iconName;\n        if (routeName === 'Home') {\n          iconName = `ios-information-circle${focused ? '' : '-outline'}`;\n        } else if (routeName === 'Settings') {\n          iconName = `ios-options${focused ? '' : '-outline'}`;\n        }\n\n        // You can return any component that you like here! We usually use an\n        // icon component from react-native-vector-icons\n        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;\n      },\n    }),\n    tabBarOptions: {\n      activeTintColor: 'tomato',\n      inactiveTintColor: 'gray',\n    },\n  }\n);\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/tabs-with-icons",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("p",null,"Let's dissect this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tabBarIcon")," is a property on ",Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions"),", so we know we can use it on our screen components, but in this case chose to put it in the ",Object(i.b)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," configuration in order to centralize the icon configuration for convenience."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tabBarIcon")," is a function that is given the ",Object(i.b)("inlineCode",{parentName:"li"},"focused")," state, ",Object(i.b)("inlineCode",{parentName:"li"},"tintColor"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"horizontal")," param, which is a boolean. If you take a peek further down in the configuration you will see ",Object(i.b)("inlineCode",{parentName:"li"},"tabBarOptions")," and ",Object(i.b)("inlineCode",{parentName:"li"},"activeTintColor")," and ",Object(i.b)("inlineCode",{parentName:"li"},"inactiveTintColor"),". These default to the iOS platform defaults, but you can change them here. The ",Object(i.b)("inlineCode",{parentName:"li"},"tintColor")," that is passed through to the ",Object(i.b)("inlineCode",{parentName:"li"},"tabBarIcon")," is either the active or inactive one, depending on the ",Object(i.b)("inlineCode",{parentName:"li"},"focused")," state (focused is active). The orientation state ",Object(i.b)("inlineCode",{parentName:"li"},"horizontal")," is ",Object(i.b)("inlineCode",{parentName:"li"},"true")," when the device is in landscape, otherwise is ",Object(i.b)("inlineCode",{parentName:"li"},"false")," for portrait."),Object(i.b)("li",{parentName:"ul"},"Read the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/2.x/bottom-tab-navigator"}),"full API reference")," for further information on ",Object(i.b)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," configuration options.")),Object(i.b)("h2",{id:"jumping-between-tabs"},"Jumping between tabs"),Object(i.b)("p",null,"Switching from one tab to another has a familiar API ","\u2014"," ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.navigation.navigate"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Button, Text, View } from 'react-native';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n        <Button\n          title=\"Go to Settings\"\n          onPress={() => this.props.navigation.navigate('Settings')}\n        />\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n      </View>\n    );\n  }\n}\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/jumping-between-tabs",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("h2",{id:"a-stack-navigator-for-each-tab"},"A stack navigator for each tab"),Object(i.b)("p",null,"Usually tabs don't just display one screen ","\u2014"," for example, on your Twitter feed, you can tap on a tweet and it brings you to a new screen within that tab with all of the replies. You can think of this as there being separate navigation stacks within each tab, and that's exactly how we will model it in React Navigation."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import {\n  createBottomTabNavigator,\n  createStackNavigator,\n} from 'react-navigation';\n\nclass DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Details!</Text>\n      </View>\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        {/* other code from before here */}\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        {/* other code from before here */}\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\nconst HomeStack = createStackNavigator({\n  Home: HomeScreen,\n  Details: DetailsScreen,\n});\n\nconst SettingsStack = createStackNavigator({\n  Settings: SettingsScreen,\n  Details: DetailsScreen,\n});\n\nexport default createBottomTabNavigator(\n  {\n    Home: HomeStack,\n    Settings: SettingsStack,\n  },\n  {\n    /* Other configuration remains unchanged */\n  }\n);\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/stacks-in-tabs",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("h2",{id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component"},"Why do we need a TabNavigator instead of TabBarIOS or some other component?"),Object(i.b)("p",null,"It's common to attempt to use a standalone tab bar component without integrating it into the navigation library you use in your app. In some cases, this works fine! You should be warned, however, that you may run into some frustrating unanticipated issues when doing this."),Object(i.b)("p",null,"For example, React Navigation's ",Object(i.b)("inlineCode",{parentName:"p"},"TabNavigator"),' takes care of handling the Android back button for you, while standalone components typically do not. Additionally, it is more difficult for you (as the developer) to perform actions such as "jump to this tab and then go to this screen" if you need to call into two distinct APIs for it. Lastly, mobile user interfaces have numerous small design details that require that certain components are aware of the layout or presence of other components ',"\u2014"," for example, if you have a translucent tab bar, content should scroll underneath it and the scroll view should have an inset on the bottom equal to the height of the tab bar so you can see all of the content. Double tapping the tab bar should make the active navigation stack pop to the top of the stack, and doing it again should scroll the active scroll view in that stack scroll to the top. While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."),Object(i.b)("h2",{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"},"A tab navigator contains a stack and you want to hide the tab bar on specific screens"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.x/navigation-options-resolution#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"}),"See the documentation here")),Object(i.b)("h2",{id:"a-tab-icon-that-doesnt-navigate"},"A tab icon that doesn't navigate"),Object(i.b)("p",null,"If you want a tab icon that never actually opens a stack navigator, simple provide the ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarOnPress")," callback for the tab's ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," without invoking the provided ",Object(i.b)("inlineCode",{parentName:"p"},"defaultHandler")," method."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"createBottomTabNavigator({\n  ...,\n  Placeholder: {\n      screen: () => null,\n      navigationOptions: {\n        tabBarOnPress: () => {\n          // do something custom here\n        },\n      },\n  }\n  ...\n});\n")))}b.isMDXComponent=!0},510:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);