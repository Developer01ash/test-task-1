import { Box, Divider, List, ListItem, ListItemButton, Typography } from '@mui/material';
import styles from './recentTransaction.module.css'
import { formatDate } from '@/utils/dateFormate';

interface RecentTransactionProps {
    transaction: any[];
}
const RecentTransaction: React.FC<RecentTransactionProps> = ({ transaction }) => {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    {transaction.length > 0 ? 
                     <List>
                        {/* showing recent 5 transactions */}
                     {transaction?.slice(0,5).map((item) => {
                         return (
                             <>
                                 <ListItem disablePadding>
                                     <ListItemButton >
                                         <div className={styles.listButton}>
                                             <h3 className={styles.category}>{item?.category} 
                                             <span className={styles.amount}>{item?.amount}$</span>
                                             </h3>
                                             <p className={styles.description}>{item?.description}
                                             <span className={styles.date}>{formatDate(item.time)}</span>
                                             </p>
                                         </div>
                                     </ListItemButton>
                                 </ListItem>
                                 <Divider />
                             </>
                         )
                     })}

                 </List>
                    :
                    <Typography variant='body2'>No transactions found</Typography>
                    }
                   
                </nav>

            </Box>


        </>
    )
}

export default RecentTransaction