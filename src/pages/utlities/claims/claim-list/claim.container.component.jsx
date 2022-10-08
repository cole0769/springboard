import React, { useEffect, useState } from 'react'
import { getDwData } from "../../../../components/fetch-data/data.fetch";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    spacing: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

function ParentClaimContainer(claimId) {
    const [parentData, setparentData] = useState([]);
    const fetchParent = async () => {
        const result = await getDwData('/claim/getparent/' + claimId.claims);
        setparentData(result.data)
    };
    var parent = parentData.map((parentData => parentData.GangParent))
    var amount = parentData.map((parentData => parentData.RefundAmount))
    var total = parentData.map((parentData => parentData.SumRefund))
    var claimstatus = parentData.map(parentData => parentData.ClaimStatus)
    var firstname = parentData.map(parentData => parentData.FirstName)
    var lastname = parentData.map((parentData => parentData.LastName))
    var address = parentData.map((parentData => parentData.Address))
    var address_2 = parentData.map((parentData => parentData.Address2))
    var city = parentData.map((parentData => parentData.City))
    var state = parentData.map((parentData => parentData.State))
    var zip = parentData.map((parentData => parentData.ZipCode))
    var country = parentData.map((parentData => parentData.Country))
    var email = parentData.map((parentData => parentData.Email))
    var phone = parentData.map((parentData => parentData.PhoneNumber))
    var client = parentData.map((parentData => parentData.ClientName))
    var dept = parentData.map((parentData => parentData.DeptName))
    var deptname = parentData.map((parentData => parentData.DeptLongName))
    var ftype = parentData.map((parentData => parentData.FulfillmentType))

    
    useEffect(() => {
        fetchParent(claimId.claims);
        console.log('table',claimId.claims)
    }, []);

          
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6} md={8}>
                    <Item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography ariant="h5" gutterBottom>
                                <TextField id="parentid" label="parent claim" defaultValue={parent} size="small" />
                                <TextField id="claimstatus" label="status" defaultValue={claimstatus}  size="small" />
                                <TextField id="gangtotal" label="gang total" defaultValue={total}  size="small" />
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" component="div">
                                {firstname} {lastname} <br />
                                {address} <br />
                                {address_2} <br />
                                {city}, {state}    {zip} <br />
                                {country}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Email: {email} <br />
                                Phone: {phone}
                            </Typography>
                            <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                        </Card>
                    </Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                </Grid>
            </Grid>
        </Box>
    );
    }

export default ParentClaimContainer;