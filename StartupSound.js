function M(o,i,t){window.enmity.settings.set(o,i,t)}function F(o,i,t){return window.enmity.settings.get(o,i,t)}function C(o){window.enmity.plugins.registerPlugin(o)}function y(...o){return window.enmity.modules.getByProps(...o)}function _(...o){return window.enmity.modules.getByName(...o)}window.enmity.modules.common;const R=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const D=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function H(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const I=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight;const P=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon;const k=e.FormInput;e.FormLabel,e.FormRadio;const B=e.FormRow,N=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const L=y("DRMType","FilterType").default;function x({settings:o}){const[i,t]=n.useState(!0);return D.createThemedStyleSheet({item:{color:R.ThemeColorMap.HEADER_PRIMARY}}),n.useEffect(()=>{},[]),n.createElement(I,null,n.createElement(N,{title:"\u{1F5FF}"},n.createElement(k,{title:"Volume",placeholder:"69",keyboardType:"numeric",value:o.get("volume"),onChange:l=>o.set("volume",l)}),n.createElement(P,{onPress:()=>t(!1)},n.createElement(B,{label:"Test volume"}))),n.createElement(L,{source:{uri:"https://github.com/Egg-Man-Real/Moyai/raw/main/src/boom.mp4"},audioOnly:!0,paused:i,repeat:!0,onEnd:()=>t(!0),volume:Number(o.get("volume"))}))}var G="StartupSound",V="1.0.0",O="Plays a sound on startup.",U=[{name:"Tiny Games",id:"483056015890186263"}],a={name:G,version:V,description:O,authors:U};const g=y("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),z=_("ChatBanner",{default:!1}),K=y("DRMType","FilterType").default;y("uploadLocalFiles");const r=H("startupsound"),Q={...a,onStart(){F(a.name,"volume")||M(a.name,"volume","1");let o=0;const i=3,t=()=>{var l,h,E;try{o++;for(const m of["MESSAGE_CREATE","MESSAGE_UPDATE","MESSAGE_REACTION_ADD"])try{g.dispatch({type:m,message:{}})}catch(c){console.log(`[${a.name} Dispatch Error]`,c)}const A=(l=g._actionHandlers._orderedActionHandlers)==null?void 0:l.MESSAGE_CREATE.find(m=>m.name==="MessageStore"),v=(h=g._actionHandlers._orderedActionHandlers)==null?void 0:h.MESSAGE_UPDATE.find(m=>m.name==="MessageStore"),f=(E=g._actionHandlers._orderedActionHandlers)==null?void 0:E.MESSAGE_REACTION_ADD.find(m=>m.name==="MessageStore");r.instead(z,"default",(m,c,b)=>{const S=c[0].channel.id,[d,p]=n.useState(!0);let u;return r.before(A,"actionHandler",(w,s,T)=>{s[0].channelId===S&&(u.seek(0),d&&p(!1))}),r.before(v,"actionHandler",(w,s,T)=>{s[0].channelId===S&&(u.seek(0),d&&p(!1))}),r.after(f,"actionHandler",(w,s,T)=>{s[0].channelId===S&&(u.seek(0),d&&p(!1))}),n.createElement(n.Fragment,null,b.apply(m,c),n.createElement(K,{ref:w=>{u=w},source:{uri:"https://github.com/Egg-Man-Real/Moyai/raw/main/src/boom.mp4"},audioOnly:!0,paused:d,volume:Number(F(a.name,"volume"))}))})}catch{o<i&&setTimeout(()=>t(),o*1e3)}};setTimeout(()=>t(),300)},onStop(){r.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(x,{settings:o})}};C(Q);
