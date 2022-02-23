import React from 'react';
import { View, Image, ScrollView } from 'react-native';

import styles from './styles';

export default ({captures=[]}) => (
    <ScrollView 
        horizontal={true}
        style={[styles.bottomToolbar, styles.galleryContainer]} 
    >
        {captures.map(({ uri }) => (
            <View style={styles.galleryImageContainer} key={uri}>
                <Image source={{ C:/Users/DELL/OneDrive/Desktop/irts_za_boliy/sizze.io (1)/sizze.io/pages/Page_camera/temp }} style={styles.galleryImage} />
            </View>
        ))}
    </ScrollView>

);


// import React from 'react';
// import { View, Image, ScrollView } from 'react-native';

// import styles from './styles';

// export default ({captures=[]}) => (
//     <ScrollView 
//         horizontal={true}
//         style={[styles.bottomToolbar, styles.galleryContainer]} 
//     >
//         {captures.map(({ uri }) => (
//             <View style={styles.galleryImageContainer} key={uri}>
//                 <Image source={{ uri }} style={styles.galleryImage} />
//             </View>
//         ))}
//     </ScrollView>
// );