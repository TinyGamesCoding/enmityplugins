function i(e){window.enmity.plugins.registerPlugin(e)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function s(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function d(e){return window.enmity.patcher.create(e)}var r="StartupSound",w="1.0.0",a="Plays a sound on startup.",l=[{name:"Tiny Games",id:"483056015890186263"}],c={name:r,version:w,description:a,authors:l};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const u=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel;const y=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var g=({settings:e})=>n.createElement(u,{label:"Example Setting",trailing:n.createElement(y,{value:e.get("example",!0),onValueChange:()=>e.toggle("example",!0)})});const t=s("startTyping"),m=d("silent-typing"),S={...c,onStart(){m.instead(t,"startTyping",()=>{}),m.instead(t,"stopTyping",()=>{})},onStop(){m.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(g,{settings:e})}};i(S);
