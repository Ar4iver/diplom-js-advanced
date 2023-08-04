import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton = (props) => (
    <div>
        <ContentLoader
            speed={2}
            width={380}
            height={157}
            viewBox="0 0 380 157"
            backgroundColor="#b8b2b2"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="48" y="157" rx="3" ry="3" width="380" height="6" />
            <rect x="25" y="23" rx="10" ry="10" width="281" height="17" />
            <rect x="26" y="51" rx="9" ry="9" width="122" height="20" />
            <rect x="28" y="99" rx="10" ry="10" width="150" height="20" />
            <rect x="206" y="95" rx="10" ry="10" width="97" height="59" />
            <rect x="29" y="134" rx="10" ry="10" width="84" height="20" />
        </ContentLoader>
    </div>
)
