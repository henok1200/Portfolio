const iconUrl = (icon)=>{
    return new URL(`../assets/icons/${icon}`,import.meta.url)
}

export {iconUrl};

