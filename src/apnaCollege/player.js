import React from "react";
import { Text } from "react-native";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
	defaultLayoutIcons,
	DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const SabkaPlayer = ({ route, navigation }) => {
	const { id, title } = route.params;
	const playerSource = `https://fast.wistia.com/embed/medias/${id}.m3u8`;
	return (
		<MediaPlayer title={title} src={playerSource}>
			<MediaProvider />
			<DefaultVideoLayout
				thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
				icons={defaultLayoutIcons}
			/>
		</MediaPlayer>
	);
};

export default SabkaPlayer;