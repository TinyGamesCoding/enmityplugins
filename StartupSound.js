function l(e){window.enmity.plugins.registerPlugin(e)}const a=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const d=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const u=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function w(e){return window.enmity.patcher.create(e)}var y="StartupSound",g="1.0.0",S="Plays a sound on startup.",p=[{name:"Tiny Games",id:"483056015890186263"}],F={name:y,version:g,description:S,authors:p};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const h=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight;const T=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon;const v=o.FormInput;o.FormLabel,o.FormRadio;const b=o.FormRow,C=o.FormSection;o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function s(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const f=s("DRMType","FilterType").default;function E({settings:e}){const[m,t]=n.useState(!0);return u.createThemedStyleSheet({item:{color:a.ThemeColorMap.HEADER_PRIMARY}}),n.useEffect(()=>{},[]),n.createElement(h,null,n.createElement(C,{title:"\u{1F5FF}"},n.createElement(v,{title:"Volume",placeholder:"69",keyboardType:"numeric",value:e.get("volume"),onChange:i=>e.set("volume",i)}),n.createElement(T,{onPress:()=>t(!1)},n.createElement(b,{label:"Test volume"}))),n.createElement(f,{source:{uri:"https://github.com/Egg-Man-Real/Moyai/raw/main/src/boom.mp4"},audioOnly:!0,paused:m,repeat:!0,onEnd:()=>t(!0),volume:Number(e.get("volume"))}))}function R(e){return window.enmity.assets.getIDByName(e)}s("DRMType","FilterType").default;const r=w("FixConnecting"),A={...F,onStart(){let e=s("startSession");const m=r.after(e,"startSession",(t,i,c)=>{m(),setTimeout(()=>{d.open({key:"TOAST",content:"BFDIA 7",icon:R("Check")}),c.apply(t,i),Number(get(Manifest.name,"volume"))},300)})},onStop(){r.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(E,{settings:e})}};l(A);
