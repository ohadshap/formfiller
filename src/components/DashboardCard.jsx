import React, { useState, useEffect } from "react";
import {
    Button,
    Heading,
    Image,
    Collection,
    Card,
    View,
    Divider,
} from "@aws-amplify/ui-react";

const DashboardCard = ({items}) => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        setDocs([...items, { name: 'Milford - Room' }])
        
    }, []);
   
    return (
        <Collection
            items={docs}
            type="list"
            direction="row"
            gap="20px"
            wrap="nowrap"
        >
            {(item, index) => (
            <Card
                key={index}
                borderRadius="medium"
                maxWidth="20rem"
                variation="outlined"
            >
                {item.image &&(
                    <Image
                    src={item.image}
                    alt={item.name}
                    />
                )}
                <View padding="xs">
                <Heading level={3} padding="medium">{item.name}</Heading>
                    {/* <Flex>
                        {item.badges.map((badge) => (
                        <Badge
                            key={badge}
                            backgroundColor={
                            badge === 'Waterfront' ? 'blue.40' 
                            : badge === 'Mountain' ? 'green.40' : 'yellow.40'}
                        >
                            {badge}
                        </Badge>
                        ))}
                    </Flex> */}
                    <Divider padding="xs" />
                    <Heading padding="medium">{item.description || "no desc"}</Heading>
                    <Button variation="primary" isFullWidth>
                        Use Template
                    </Button>
                </View>
            </Card>
            )}
        </Collection>
    );
};

export default DashboardCard;
  
  