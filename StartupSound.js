function g(o,m,t){window.enmity.settings.set(o,m,t)}function u(o,m,t){return window.enmity.settings.get(o,m,t)}function h(o){window.enmity.plugins.registerPlugin(o)}function s(...o){return window.enmity.modules.getByProps(...o)}function S(...o){return window.enmity.modules.getByName(...o)}window.enmity.modules.common;const F=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const T=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function v(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const b=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight;const f=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon;const c=e.FormInput;e.FormLabel,e.FormRadio;const C=e.FormRow,E=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const A=s("DRMType","FilterType").default;function B({settings:o}){const[m,t]=n.useState(!0);return T.createThemedStyleSheet({item:{color:F.ThemeColorMap.HEADER_PRIMARY}}),n.useEffect(()=>{},[]),n.createElement(b,null,n.createElement(E,{title:"Startup Sound - By Tiny Games"},n.createElement(c,{title:"Volume",placeholder:"1",keyboardType:"numeric",value:o.get("volume"),onChange:i=>o.set("volume",i)}),n.createElement(c,{title:"Sound",placeholder:"Insert valid MP4/MOV file link here.",value:o.get("sound"),onChange:i=>o.set("sound",i)}),n.createElement(f,{onPress:()=>t(!1)},n.createElement(C,{label:"Test Sound"}))),n.createElement(A,{source:{uri:o.get("sound")},audioOnly:!0,paused:m,repeat:!0,onEnd:()=>t(!0),volume:Number(o.get("volume"))}))}var P="StartupSound",R="1.0.0",L="Plays a sound on startup.",M=[{name:"Tiny Games",id:"483056015890186263"}],l={name:P,version:R,description:L,authors:M};s("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue");const k=S("ChatBanner",{default:!1}),N=s("DRMType","FilterType").default;s("uploadLocalFiles");const r=v("startupsound"),x={...l,onStart(){u(l.name,"volume")||g(l.name,"volume","1");let o=0;const m=3,t=()=>{try{o++,r.instead(k,"default",(i,a,d)=>{const I=a[0].channel.id,[w,V]=n.useState(!1);let y;return n.createElement(n.Fragment,null,d.apply(i,a),n.createElement(N,{ref:p=>{y=p},source:{uri:"https://cdn.discordapp.com/attachments/928046469586497607/1159084599452897330/discordo.mov"},audioOnly:!0,paused:w,volume:Number(u(l.name,"volume"))}))})}catch{o<m&&setTimeout(()=>t(),o*1e3)}};r.unpatchAll(),setTimeout(()=>t(),300)},onStop(){r.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(B,{settings:o})}};h(x);