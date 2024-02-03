import { Button, Grid, Typography } from "@mui/material";
import styles from '../../styles/Home.module.css'
import RecentTransaction from "../RecentTransaction";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Expenses from "../Expenses";
import { useEffect, useState } from "react";
import CustomAccordion from "@/components/Accordian";
import AllTransaction from "../AllTransactions";
import Cookies from 'js-cookie';

const HomePage = () => {
    const [transaction, setTransaction] = useState<any>([])
    console.log("🚀 ~ HomePage ~ transaction:", transaction)
    const [open, setOpen] = useState(false);


    useEffect(() => {
        const existingTransactions = Cookies.get('transaction');
        
        if (existingTransactions) {
          console.log("🚀 ~ useEffect ~ existingTransactions:", existingTransactions)
          setTransaction(JSON.parse(existingTransactions));
        }
      }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12} md={6} className={styles.mainDiv}>
                    <Grid item xs={12}>
                        <p className={styles.heading}>Payment Tracker</p>
                    </Grid>

                    <Grid item xs={12} sx={{ marginTop: '40px' }}>
                        <Box className={styles.expense}>
                            <Button onClick={handleOpen} className={styles.payNow}>Add Expenses</Button>
                            <Box>
                                <Typography className={styles.userIncome}> User's Income</Typography>
                                <Typography variant="body2" className={styles.price}>20000$</Typography>
                            </Box>
                        </Box>
                       <Box sx={{ margin: '20px 10px 20px 0' }}>
                            <CustomAccordion
                                summary="Recent Transactions"
                                details={<RecentTransaction transaction={transaction} />}
                            />

                            <CustomAccordion
                                summary="All Transactions"
                                details={<AllTransaction transaction={transaction} />}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" className={styles.heading}>Add Expenses</Typography>
                    <Expenses setTransaction={setTransaction} setOpen={setOpen} transaction={transaction}/>
                </Box>
            </Modal>

        </>
    )
}

export default HomePage;