jest.mock(
    "@raycast/api",
    () => ({
        showToast: jest.fn(),
        Clipboard: {
            copy: jest.fn(),
        },
        showHUD: jest.fn(),
        getPreferenceValues:jest.fn(()=>{
            return {
                APIPublicKey: "publicKey",
                APISecretKey: "secretKey",
                OpenNow: false,
                AskBeforeDownload: false,
            }
        }),
        Action:{},
        Form:{}
    })
);

export {}