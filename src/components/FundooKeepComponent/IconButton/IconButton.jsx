import React from 'react'
import AddAlertIcon from "@material-ui/icons/AddAlertOutlined";
import CollaboratorIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensIcon from "@material-ui/icons/ColorLensOutlined";
import ArchiveIcon from "@material-ui/icons/ArchiveOutlined";
import PhotoIcon from "@material-ui/icons/PhotoOutlined";
import MoreIcon from "@material-ui/icons/MoreVertOutlined";
import "../IconButton/IconButton.css"


export default function IconButton() {
    return (
        <div className = 'icon-btns'>
        <AddAlertIcon className="btn-icon" />
        <CollaboratorIcon className="btn-icon" />
        <ColorLensIcon className="btn-icon" />
        <PhotoIcon className="btn-icon" />
        <ArchiveIcon className="btn-icon" />
        <MoreIcon className="btn-icon" />
    </div>
    )
}
