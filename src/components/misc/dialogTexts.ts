export type Dialog = {
  title: string
  buttonText: string
  text: string
  waitingMsg: string
  waitingText: string
  errorMsg: string
  successMsg: string
  succesTransaction: string
}

export const waitDialog: Dialog = {
  title: '',
  buttonText: 'Okay',
  text: '',
  waitingMsg: 'Waiting for your tokens',
  waitingText: 'It will take some time for the transaction to be completed.',
  errorMsg: 'Error! Warning! An error has occured. Please try again.',
  successMsg: 'Congratulations! Your transaction is completed.',
  succesTransaction:
    'You can follow the status of your operation with the transaction hash:',
}

export const approveDialog: Dialog = {
  title: 'Enable transaction',
  buttonText: 'Confirm',
  text: 'You allow the presale contract to transfer tokens from your wallet address',
  waitingMsg: 'Waiting for confirmation',
  waitingText: 'It will take some time for the confirmation to be completed.',
  errorMsg: "We couldn't proceed your confirm. Please try again!",
  successMsg: 'Congratulations! Confirmation is completed.',
  succesTransaction:
    'You can follow the status of your operation with the transaction hash:',
}

export const buyDialog: Dialog = {
  title: 'Buy',
  buttonText: 'Confirm',
  text: 'You are going to presale {amount} Tokens for {stableAmount} {currency}.',
  waitingMsg: 'Waiting for confirmation',
  waitingText: 'It will take some time for the confirmation to be completed.',
  errorMsg: "We couldn't proceed your confirm. Please try again!",
  successMsg: 'Congratulations! Confirmation is completed.',
  succesTransaction:
    'You can follow the status of your operation with the transaction hash:',
}
