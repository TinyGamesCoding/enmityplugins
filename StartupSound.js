function p(o,m,t){window.enmity.settings.set(o,m,t)}function r(o,m,t){return window.enmity.settings.get(o,m,t)}function S(o){window.enmity.plugins.registerPlugin(o)}function l(...o){return window.enmity.modules.getByProps(...o)}function h(...o){return window.enmity.modules.getByName(...o)}window.enmity.modules.common;const F=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const T=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function v(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const b=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight;const f=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon;const a=e.FormInput;e.FormLabel,e.FormRadio;const C=e.FormRow,E=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const B=l("DRMType","FilterType").default;function P({settings:o}){const[m,t]=n.useState(!0);return T.createThemedStyleSheet({item:{color:F.ThemeColorMap.HEADER_PRIMARY}}),n.useEffect(()=>{},[]),n.createElement(b,null,n.createElement(E,{title:"Startup Sound - By Tiny Games"},n.createElement(a,{title:"Volume",placeholder:"1",keyboardType:"numeric",value:o.get("volume"),onChange:i=>o.set("volume",i)}),n.createElement(a,{title:"Sound",placeholder:"Insert valid MP4/MOV file link here.",value:o.get("sound"),onChange:i=>o.set("sound",i)}),n.createElement(f,{onPress:()=>t(!1)},n.createElement(C,{label:"Test Sound"}))),n.createElement(B,{source:{uri:o.get("sound")},audioOnly:!0,paused:m,repeat:!0,onEnd:()=>t(!0),volume:Number(o.get("volume"))}))}var R="StartupSound",A="1.0.0",L="Plays a sound on startup.",M=[{name:"Tiny Games",id:"483056015890186263"}],s={name:R,version:A,description:L,authors:M};l("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue");const k=h("ChatBanner",{default:!0}),D=l("DRMType","FilterType").default;l("uploadLocalFiles");const d=v("startupsound"),N={...s,onStart(){r(s.name,"volume")||p(s.name,"volume","1");let o=0;const m=3,t=()=>{try{o++,d.instead(k,"default",(i,u,c)=>{const x=u[0].channel.id,[w,I]=n.useState(!1);let y;return n.createElement(n.Fragment,null,c.apply(i,u),n.createElement(D,{ref:g=>{y=g},source:{uri:r(s.name,"sound")},audioOnly:!0,paused:w,volume:Number(r(s.name,"volume"))}))})}catch{o<m&&console.log("StartupSound failed to load. D:")}};setTimeout(()=>t(),300)},onStop(){d.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(P,{settings:o})}};S(N);
