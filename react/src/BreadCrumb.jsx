import React from "react";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import './BreadCrumb.css'

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    height: theme.spacing(3.5)
  };
});

export default function CustomizedBreadcrumbs(props) {
    let nodes = ""
    if(props.items){
        nodes = props.items.map(item => 
            <StyledBreadcrumb
                component={Link}
                to={item.path}
                label={item.label}
            />)
    }
    return (
    <div className="mt-3 w-100 d-flex justify-content-center">
        <div role="presentation">
            <Breadcrumbs separator={<i class="fs-3 bi bi-arrow-right-short"></i>} aria-label="breadcrumb">
                <StyledBreadcrumb
                    component={Link}
                    to="/"
                    label="Home"
                    icon={<HomeIcon fontSize="small" />}
                />
                {nodes}
            </Breadcrumbs>
        </div>
    </div>
    );
}