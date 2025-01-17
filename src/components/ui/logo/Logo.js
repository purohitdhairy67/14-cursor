import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import * as s from './Logo.module.css'

const cn = classNames.bind(s)

const Logo = ({
    isLab,
    className = ''
}) => {
    const offset = 1.72

    return ( <
        div className = {
            cn('wrapper', {
                isLab
            }, className)
        } >
        <
        svg viewBox = "0 0 192 32"
        aria - labelledby = "logoLabel" >
        <
        title id = "logoLabel" > {
            isLab ? '14islands.lab' : '14islands'
        } < /title> <
        path style = {
            {
                animationDelay: `${offset}s`
            }
        }
        id = "_x31_"
        d = "M0.8,25.1h5.4V10.4c-0.6,0.3-1.4,0.6-2.4,0.8c-1,0.3-2.1,0.4-3.1,0.4L0,9.3c0.5,0,1.2-0.1,1.9-0.2  C2.6,9,3.3,8.8,4.1,8.6c0.7-0.2,1.4-0.5,2-0.8c0.6-0.3,1.1-0.7,1.4-1.1h1.6v18.4h4.7v2.3h-13V25.1z" /
        >
        <
        path style = {
            {
                animationDelay: `${offset + 0.12}s`
            }
        }
        id = "_x34_"
        d = "M34.4,25.8H31V32h-2.8v-6.2h-12l-0.7-1.8l1-1.5L27.1,6.7H31v16.8h3.3V25.8z M28.3,23.4V9.3l-9.2,14.1H28.3z" /
        >
        <
        path style = {
            {
                animationDelay: `${offset + 0.2}s`
            }
        }
        id = "I"
        d = "M41.8,3.2c0,0.7-0.2,1.3-0.7,1.7c-0.5,0.4-1,0.6-1.5,0.6c-0.5,0-1-0.2-1.5-0.6c-0.4-0.4-0.7-1-0.7-1.7  c0-0.7,0.2-1.3,0.7-1.6C38.6,1.2,39,1,39.6,1c0.6,0,1.1,0.2,1.5,0.6C41.6,2,41.8,2.5,41.8,3.2z M38.2,27.4V9.6h2.9v17.7H38.2z" /
        >
        <
        path style = {
            {
                animationDelay: `${offset + 0.25}s`
            }
        }
        id = "S"
        d = "M55.2,13.9c-0.3-0.7-0.8-1.2-1.5-1.7c-0.7-0.5-1.6-0.7-2.7-0.7c-1.1,0-1.9,0.2-2.5,0.7c-0.6,0.5-0.9,1.1-0.9,1.9  c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.5,0.6,0.9,0.8c0.4,0.2,0.8,0.4,1.3,0.6c0.5,0.2,1,0.3,1.6,0.5c0.8,0.2,1.5,0.4,2.3,0.7  c0.8,0.2,1.5,0.6,2.1,0.9c0.6,0.4,1.1,0.8,1.5,1.4c0.4,0.6,0.6,1.3,0.6,2.2c0,0.8-0.2,1.5-0.5,2.2c-0.3,0.7-0.8,1.3-1.4,1.8  c-0.6,0.5-1.3,0.9-2.2,1.2c-0.8,0.3-1.8,0.4-2.9,0.4c-1.4,0-2.5-0.2-3.4-0.6c-0.9-0.4-1.6-0.8-2.2-1.3c-0.7-0.6-1.2-1.2-1.5-1.9  l2.3-1.4c0.2,0.5,0.6,1,1,1.5c0.3,0.4,0.8,0.7,1.5,1c0.6,0.3,1.4,0.4,2.3,0.4c0.5,0,1-0.1,1.4-0.2c0.5-0.1,0.9-0.3,1.2-0.5  c0.4-0.2,0.6-0.5,0.9-0.9c0.2-0.3,0.3-0.7,0.3-1.2c0-0.9-0.4-1.5-1.2-1.9c-0.8-0.4-1.8-0.8-3.2-1.2c-0.7-0.2-1.4-0.4-2.2-0.7  c-0.7-0.3-1.4-0.6-2-1c-0.6-0.4-1-0.9-1.4-1.4c-0.4-0.6-0.5-1.3-0.5-2.1c0-0.8,0.2-1.5,0.5-2.2c0.3-0.7,0.8-1.2,1.4-1.7  c0.6-0.5,1.3-0.8,2.1-1.1c0.8-0.3,1.6-0.4,2.5-0.4c1.6,0,2.9,0.3,4.1,1c1.1,0.7,1.9,1.5,2.3,2.4L55.2,13.9z" /
        >
        <
        path id = "L"
        d = "M61.3,0h2.9v27.4h-2.9V0z"
        style = {
            {
                animationDelay: `${offset + 0.29}s`
            }
        }
        /> <
        path id = "A"
        style = {
            {
                animationDelay: `${offset + 0.33}s`
            }
        }
        d = "M68,13c0.3-0.7,0.8-1.4,1.5-2c0.5-0.5,1.2-0.9,2.1-1.3c0.9-0.4,1.9-0.6,3.1-0.6c1.2,0,2.3,0.2,3.1,0.5  c0.8,0.3,1.5,0.7,2,1.3c0.5,0.6,0.9,1.2,1.1,2c0.2,0.8,0.3,1.7,0.3,2.5v7.4c0,0.9,0.1,1.5,0.3,1.8c0.2,0.3,0.5,0.4,0.9,0.4  c0.3,0,0.5,0,0.6,0c0.1,0,0.3-0.1,0.4-0.1l0.1,2.1c-0.2,0.1-0.4,0.2-0.7,0.3c-0.3,0.1-0.7,0.1-1.2,0.1c-0.8,0-1.5-0.3-2-0.8  c-0.5-0.6-0.8-1.3-0.9-2.1c-0.5,1-1.3,1.8-2.3,2.4c-1,0.6-2.2,1-3.4,1c-1.7,0-3-0.4-3.9-1.3c-0.9-0.9-1.4-2.1-1.4-3.6  c0-0.9,0.3-1.7,0.7-2.3c0.4-0.6,1-1.1,1.7-1.5c0.7-0.3,1.4-0.6,2.1-0.8c0.7-0.2,1.6-0.3,2.6-0.5l3.6-0.5v-2c0-1.2-0.3-2.1-0.9-2.8  c-0.6-0.7-1.6-1.1-2.9-1.1c-0.8,0-1.5,0.1-2.1,0.4c-0.5,0.3-1,0.6-1.3,1c-0.3,0.4-0.6,0.9-0.9,1.5L68,13z M73.6,25.5  c0.8,0,1.5-0.1,2.1-0.4c0.6-0.2,1.1-0.6,1.5-1c0.4-0.4,0.7-0.9,1-1.4c0.2-0.5,0.3-1,0.3-1.6v-1.5c-0.4,0.1-1,0.1-1.7,0.2  c-0.7,0.1-1.4,0.2-2.1,0.3c-0.5,0.1-1,0.2-1.5,0.3s-0.9,0.3-1.3,0.5c-0.7,0.4-1.1,1.1-1.1,2c0,0.8,0.2,1.5,0.7,1.9  C72,25.3,72.7,25.5,73.6,25.5z" /
        >
        <
        path style = {
            {
                animationDelay: `${offset + 0.38}s`
            }
        }
        id = "N"
        d = "M98.6,15.6c0-0.5-0.1-1.1-0.3-1.6c-0.2-0.5-0.4-0.9-0.7-1.3c-0.3-0.4-0.7-0.7-1.2-0.9c-0.5-0.2-1.1-0.3-1.8-0.3  c-0.9,0-1.6,0.2-2.3,0.6c-0.7,0.4-1.2,0.9-1.6,1.5c-0.4,0.6-0.8,1.3-1,2.1c-0.2,0.8-0.3,1.5-0.3,2.3v9.4h-2.9V13.3  c0-0.4,0-0.9-0.1-1.6c0-0.7-0.1-1.4-0.1-2h2.8c0,0.2,0,0.4,0.1,0.7c0,0.3,0,0.6,0,0.9c0,0.3,0,0.7,0,1c0,0.3,0,0.6,0,0.9h0.2  c0.2-0.5,0.5-1,0.9-1.4c0.4-0.5,0.8-0.9,1.3-1.3c0.5-0.4,1.1-0.7,1.7-0.9c0.6-0.2,1.3-0.3,2.1-0.3c0.9,0,1.7,0.1,2.4,0.4  c0.7,0.2,1.4,0.6,1.9,1.1c0.5,0.5,1,1.2,1.3,2c0.3,0.8,0.5,1.8,0.5,3v11.7h-2.9V15.6z" /
        >
        <
        path style = {
            {
                animationDelay: `${offset + 0.45}s`,
                animationDuration: `.5s`
            }
        }
        id = "D"
        d = "M121.4,0v23.8c0,0.4,0,1,0.1,1.7c0,0.7,0.1,1.3,0.1,1.9H119c0-0.1,0-0.3-0.1-0.6c0-0.2,0-0.5-0.1-0.8  c0-0.3,0-0.6-0.1-0.8c0-0.3,0-0.5,0-0.8h-0.2c-0.3,0.4-0.6,0.9-1,1.3c-0.4,0.4-0.9,0.8-1.4,1.1c-0.5,0.3-1.1,0.6-1.7,0.8  c-0.6,0.2-1.3,0.3-1.9,0.3c-1.1,0-2.2-0.2-3.1-0.7c-1-0.4-1.8-1.1-2.5-1.9c-0.7-0.8-1.3-1.8-1.7-2.9c-0.4-1.1-0.6-2.4-0.6-3.8  c0-1.4,0.2-2.7,0.6-3.8c0.4-1.2,1-2.2,1.7-3c0.7-0.8,1.6-1.5,2.6-1.9c1-0.5,2.1-0.7,3.2-0.7c0.6,0,1.2,0.1,1.8,0.3  c0.6,0.2,1.1,0.4,1.6,0.7c0.5,0.3,0.9,0.6,1.3,1c0.4,0.4,0.7,0.8,0.9,1.1h0.2c0-0.4-0.1-0.7-0.1-1.2c0-0.4,0-0.8,0-1V0H121.4z   M107.6,18.5c0,2.3,0.5,4.1,1.6,5.3c1.1,1.2,2.4,1.8,4,1.8c1.6,0,2.9-0.6,4-1.8c1-1.2,1.6-2.9,1.6-5.3c0-2.3-0.5-4.1-1.6-5.3  c-1-1.2-2.4-1.8-4-1.8c-1.6,0-2.9,0.6-4,1.8C108.1,14.4,107.6,16.2,107.6,18.5z" /
        >
        <
        path style = {
            {
                animationDelay: `${offset + 0.6}s`,
                animationDuration: `.6s`
            }
        }
        id = "S_1_"
        d = "M135.5,13.9c-0.3-0.7-0.8-1.2-1.5-1.7c-0.7-0.5-1.6-0.7-2.7-0.7c-1.1,0-1.9,0.2-2.5,0.7c-0.6,0.5-0.9,1.1-0.9,1.9  c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.5,0.6,0.9,0.8c0.4,0.2,0.8,0.4,1.3,0.6c0.5,0.2,1,0.3,1.6,0.5c0.8,0.2,1.5,0.4,2.3,0.7  c0.8,0.2,1.5,0.6,2.1,0.9c0.6,0.4,1.1,0.8,1.5,1.4c0.4,0.6,0.6,1.3,0.6,2.2c0,0.8-0.2,1.5-0.5,2.2c-0.3,0.7-0.8,1.3-1.4,1.8  c-0.6,0.5-1.3,0.9-2.2,1.2c-0.8,0.3-1.8,0.4-2.9,0.4c-1.4,0-2.5-0.2-3.4-0.6c-0.9-0.4-1.6-0.8-2.2-1.3c-0.7-0.6-1.2-1.2-1.5-1.9  l2.3-1.4c0.2,0.5,0.6,1,1,1.5c0.3,0.4,0.8,0.7,1.5,1c0.6,0.3,1.4,0.4,2.3,0.4c0.5,0,1-0.1,1.4-0.2c0.5-0.1,0.9-0.3,1.2-0.5  c0.4-0.2,0.6-0.5,0.9-0.9c0.2-0.3,0.3-0.7,0.3-1.2c0-0.9-0.4-1.5-1.2-1.9c-0.8-0.4-1.8-0.8-3.2-1.2c-0.7-0.2-1.4-0.4-2.2-0.7  c-0.7-0.3-1.4-0.6-2-1c-0.6-0.4-1-0.9-1.4-1.4c-0.4-0.6-0.5-1.3-0.5-2.1c0-0.8,0.2-1.5,0.5-2.2c0.3-0.7,0.8-1.2,1.4-1.7  c0.6-0.5,1.3-0.8,2.1-1.1c0.8-0.3,1.6-0.4,2.5-0.4c1.6,0,2.9,0.3,4.1,1c1.1,0.7,1.9,1.5,2.3,2.4L135.5,13.9z" /
        >
        <
        path id = "_x2E_"
        className = {
            cn('dot')
        }
        d = "M146.1,25.5c0,0.7-0.2,1.2-0.6,1.6c-0.4,0.4-0.9,0.6-1.5,0.6c-0.5,0-1-0.2-1.5-0.6c-0.4-0.4-0.7-0.9-0.7-1.6  c0-0.6,0.2-1.1,0.7-1.5c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6C145.9,24.3,146.1,24.8,146.1,25.5z" /
        >
        <
        g >
        <
        path id = "L_1_"
        d = "M149.9,0h2.9v27.4h-2.9V0z"
        className = {
            cn('lab')
        }
        /> <
        path className = {
            cn('lab')
        }
        id = "A_1_"
        d = "M156.6,13c0.3-0.7,0.8-1.4,1.5-2c0.5-0.5,1.2-0.9,2.1-1.3c0.9-0.4,1.9-0.6,3.1-0.6c1.2,0,2.3,0.2,3.1,0.5  c0.8,0.3,1.5,0.7,2,1.3c0.5,0.6,0.9,1.2,1.1,2c0.2,0.8,0.3,1.7,0.3,2.5v7.4c0,0.9,0.1,1.5,0.3,1.8c0.2,0.3,0.5,0.4,0.9,0.4  c0.3,0,0.5,0,0.6,0c0.1,0,0.3-0.1,0.4-0.1l0.1,2.1c-0.2,0.1-0.4,0.2-0.7,0.3c-0.3,0.1-0.7,0.1-1.2,0.1c-0.8,0-1.5-0.3-2-0.8  c-0.5-0.6-0.8-1.3-0.9-2.1c-0.5,1-1.3,1.8-2.3,2.4c-1,0.6-2.2,1-3.4,1c-1.7,0-3-0.4-3.9-1.3c-0.9-0.9-1.4-2.1-1.4-3.6  c0-0.9,0.3-1.7,0.7-2.3c0.4-0.6,1-1.1,1.7-1.5c0.7-0.3,1.4-0.6,2.1-0.8c0.7-0.2,1.6-0.3,2.6-0.5l3.6-0.5v-2c0-1.2-0.3-2.1-0.9-2.8  c-0.6-0.7-1.6-1.1-2.9-1.1c-0.8,0-1.5,0.1-2.1,0.4c-0.5,0.3-1,0.6-1.3,1c-0.3,0.4-0.6,0.9-0.9,1.5L156.6,13z M162.2,25.5  c0.8,0,1.5-0.1,2.1-0.4c0.6-0.2,1.1-0.6,1.5-1c0.4-0.4,0.7-0.9,1-1.4c0.2-0.5,0.3-1,0.3-1.6v-1.5c-0.4,0.1-1,0.1-1.7,0.2  c-0.7,0.1-1.4,0.2-2.1,0.3c-0.5,0.1-1,0.2-1.5,0.3c-0.5,0.1-0.9,0.3-1.3,0.5c-0.7,0.4-1.1,1.1-1.1,2c0,0.8,0.2,1.5,0.7,1.9  C160.6,25.3,161.3,25.5,162.2,25.5z" /
        >
        <
        path className = {
            cn('lab')
        }
        id = "B"
        d = "M178,0v10.1c0,0.2,0,0.5,0,0.7c0,0.3,0,0.5-0.1,0.7c0,0.3,0,0.5,0,0.8h0.2c0.3-0.3,0.6-0.7,1-1.1  c0.4-0.4,0.8-0.7,1.3-1c0.5-0.3,1-0.6,1.6-0.8c0.6-0.2,1.3-0.3,2-0.3c1.2,0,2.3,0.2,3.2,0.7c1,0.5,1.8,1.1,2.5,1.9  c0.7,0.8,1.2,1.8,1.6,3c0.4,1.1,0.6,2.4,0.6,3.8c0,1.4-0.2,2.6-0.6,3.7c-0.4,1.1-0.9,2.1-1.7,2.9c-0.7,0.8-1.6,1.5-2.5,1.9  c-1,0.5-2.1,0.7-3.2,0.7c-0.7,0-1.3-0.1-1.9-0.3c-0.6-0.2-1.2-0.5-1.7-0.8c-0.5-0.3-1-0.7-1.4-1.1c-0.4-0.4-0.7-0.8-1-1.3h-0.2  c0,0.2,0,0.5,0,0.8c0,0.3,0,0.6-0.1,0.8c0,0.3,0,0.5-0.1,0.8c0,0.2-0.1,0.4-0.1,0.6h-2.6c0-0.6,0.1-1.2,0.1-1.9  c0-0.7,0.1-1.3,0.1-1.7V0H178z M189,18.5c0-2.3-0.5-4.1-1.6-5.3c-1.1-1.2-2.4-1.8-4-1.8c-1.6,0-2.9,0.6-4,1.8  c-1,1.2-1.6,2.9-1.6,5.3c0,2.3,0.5,4.1,1.6,5.3c1,1.2,2.4,1.8,4,1.8c1.6,0,2.9-0.6,4-1.8C188.5,22.6,189,20.8,189,18.5z" /
        >
        <
        /g> <
        /svg> <
        /div>
    )
}

Logo.propTypes = {
    isLab: PropTypes.bool,
    className: PropTypes.string,
}

export default Logo