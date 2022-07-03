const abi = [{"constant":true,"inputs":[{"name":"_address","type":"address"},{"name":"_slot","type":"uint8"}],"name":"getNameBySlot","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"offchain"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_slotId","type":"uint8"}],"name":"transfer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"},{"name":"_slot","type":"uint8"},{"name":"_tagId","type":"uint256"}],"name":"getTagsOfNameBySlot","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"offchain"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"treasury_changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getTotalNamesOfAddress","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"offchain"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getTotalMints","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"offchain"},{"constant":false,"inputs":[{"name":"_slotId","type":"uint8"},{"name":"_tagId","type":"uint8"},{"name":"_data","type":"bytes32"}],"name":"editTag","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"treasury_Withdrawal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_vnsAddress","type":"string"}],"name":"resolveAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"offchain"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_minter","type":"address"},{"indexed":false,"name":"_name","type":"string"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_name","type":"string"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_name","type":"string"}],"name":"Change","type":"event"}]
const offchaincode = buffer.Buffer.from(
  '60806040526004361061007c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630532e9a41461007e5780632db37ced1461014b57806332876eb8146101fe5780637a5c56f414610258578063b109ad0714610276578063f7ee8b63146103375761007c565b005b6100cf600480360360408110156100955760006000fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff169060200190929190505050610397565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101105780820151818401525b6020810190506100f4565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a6600480360360608110156101625760006000fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff169060200190929190803590602001909291905050506104ae565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101ea5780820151818401525b6020810190506101ce565b505050509050019250505060405180910390f35b610242600480360360208110156102155760006000fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff169060200190929190505050610583565b6040518082815260200191505060405180910390f35b6102606105dc565b6040518082815260200191505060405180910390f35b6102f36004803603602081101561028d5760006000fd5b81019080803590602001906401000000008111156102ab5760006000fd5b8201836020820111156102be5760006000fd5b803590602001918460018302840111640100000000831117156102e15760006000fd5b909192939090919293905050506105ee565b604051808274ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61033f610649565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156103835780820151818401525b602081019050610367565b505050509050019250505060405180910390f35b6060600260005060008474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000216000508260ff168154811015156103f057fe5b906000526020600021906002020160005b506000016000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561049c5780601f106104715761010080835404028352916020019161049c565b820191906000526020600021905b81548152906001019060200180831161047f57829003601f168201915b505050505090506104a8565b92915050565b6060600260005060008574ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000216000508360ff1681548110151561050757fe5b906000526020600021906002020160005b5060010160005080548060200260200160405190810160405280929190818152602001828054801561057057602002820191906000526020600021905b81600050546000191681526020019060010190808311610555575b5050505050905061057c565b9392505050565b6000600260005060008374ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000216000508054905090506105d7565b919050565b600060016000505490506105eb565b90565b600060036000508383604051808383808284378083019250505092505050908152602001604051809103902160009054906101000a900474ffffffffffffffffffffffffffffffffffffffffff169050610643565b92915050565b606060046000508054806020026020016040519081016040528092919081815260200182805480156106d257602002820191906000526020600021905b8160009054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610686575b505050505090506106de565b9056fea165627a7a723058200f7a21d1a52898fc27a8e8c988fe01386430c2472b52870bfac457b238845c580029'
  , 'hex').toString('base64')

const contractAddress = 'vite_1077691249858a325a4387fa77a203e494d08167fa6234bc01'

const wsProvider = new $vite_WS.WS_RPC('wss://node-vite.thomiz.dev/ws')
const api = new $vite_vitejs.ViteAPI(wsProvider)

window.onload = async function () {
  hideDefault()
  
  document.getElementById('nameCount').innerHTML = await requestOffCData('getTotalMints', [])
  document.getElementById('contractAddress').innerText = contractAddress

  const mintingQR = new QRCode('qrMinting', { width: 160, height: 160, colorDark: "#ffffff", colorLight: "#000000", correctLevel: QRCode.CorrectLevel.L })
  const transferingQR = new QRCode('qrTransfering', { width: 160, height: 160, colorDark: "#ffffff", colorLight: "#000000", correctLevel: QRCode.CorrectLevel.L })
  const editingQR = new QRCode('qrEditing', { width: 160, height: 160, colorDark: "#ffffff", colorLight: "#000000", correctLevel: QRCode.CorrectLevel.L })

  document.getElementById('searchForName').addEventListener('keyup', async function (event) {
    if (event.key === 'Enter') {
      document.getElementById('nameResult').style.display = 'block'
      document.getElementById('loadingText').style.display = "block"

      document.getElementById('nameShow').innerHTML = document.getElementById('searchForName').value + '.vite'

      const resolvedAddress = await requestOffCData('resolveAddress', [document.getElementById('searchForName').value])
      if (resolvedAddress === 'vite_0000000000000000000000000000000000000000a4f3a0cb58') {
        document.getElementById('nameTargetView').textContent = 'Not minted yet'
        document.getElementById('nameSlotView').textContent = 'Not minted yet'
        document.getElementById('nameTagsView').textContent = 'Not minted yet'

        const mintCall = $vite_vitejs.abi.encodeFunctionCall(abi, [document.getElementById('searchForName').value], 'mint')
        mintingQR.makeCode(`vite:${contractAddress}/mint?amount=200&data=${buffer.Buffer.from(mintCall, 'hex').toString('base64').replace(/\++/g, '-').replace(/\/+/g, '_').replace(/=+/g, '')}`)

        document.getElementById('mintingArea').style.display = 'block'
        document.getElementById('loadingText').style.display = "none"
        document.getElementById('nameShow_').style.display = 'block'
      } else {
        document.getElementById('nameTargetView').textContent = resolvedAddress

        const count = await requestOffCData('getTotalNamesOfAddress', [resolvedAddress])
        for (let index = 0; index < parseInt(count); index++) {
          const name = await requestOffCData('getNameBySlot', [resolvedAddress, index])
          if (name === document.getElementById('searchForName').value) {
            document.getElementById('nameSlotView').innerHTML = index
            console.log(await requestOffCData('getTagsOfNameBySlot', [resolvedAddress, index, 0]))

            const tags = await requestOffCData('getTagsOfNameBySlot', [resolvedAddress, index, 0])
            document.getElementById("nameTagsView").innerHTML = ""
            tags.forEach(item => {
              document.getElementById("nameTagsView").innerHTML += hexToAscii(item)
            })

            document.getElementById('qrTransfering').onclick = async function () {
              const transferCall = $vite_vitejs.abi.encodeFunctionCall(abi, [ document.getElementById('transferingArea_transferAddress').value, index ], 'transfer')
              transferingQR.makeCode(`vite:${contractAddress}/transfer?amount=0.01&data=${buffer.Buffer.from(transferCall, 'hex').toString('base64').replace(/\++/g, '-').replace(/\/+/g, '_').replace(/=+/g, '')}`)
            }

            document.getElementById('qrEditing').onclick = async function () {
              const editCall = $vite_vitejs.abi.encodeFunctionCall(abi, [index, document.getElementById("editingArea_tagId").value, asciiToHex(document.getElementById('editingArea_value').value) ], 'editTag')
              editingQR.makeCode(`vite:${contractAddress}/transfer?amount=0.01&data=${buffer.Buffer.from(editCall, 'hex').toString('base64').replace(/\++/g, '-').replace(/\/+/g, '_').replace(/=+/g, '')}`)
            }

            document.getElementById('nameShow_').style.display = 'block'
            document.getElementById('nameTargetView_').style.display = 'block'
            document.getElementById('nameSlotView_').style.display = 'block'
            document.getElementById('nameTagsView_').style.display = 'block'
            document.getElementById('ownerTools').style.display = 'block'
            document.getElementById('loadingText').style.display = "none"
          }
        }

        document.getElementById('ownerTools').onclick = function () {
          if (document.getElementById('ownerTools').innerHTML === 'Show owner tools') {
            document.getElementById('transferingArea').style.display = 'block'
            document.getElementById('editingArea').style.display = 'block'
            document.getElementById('ownerTools').innerHTML = 'Hide owner tools'
          } else {
            document.getElementById('transferingArea').style.display = 'none'
            document.getElementById('editingArea').style.display = 'none'
            document.getElementById('ownerTools').innerHTML = 'Show owner tools'
          }
        }
      }
    }
  })

  window.onclick = function (event) {
    if (event.target === document.getElementById('nameResult')) {
      mintingQR.clear()
      transferingQR.clear()
      editingQR.clear()
  
      hideDefault()
    }
  }

  setInterval(async () => {
    const height = await api.request('ledger_getSnapshotChainHeight')
    document.getElementById("blockHeight_icon").innerHTML === "▢" ? document.getElementById("blockHeight_icon").innerHTML = "&#9671" : document.getElementById("blockHeight_icon").innerHTML = "&#9634;"
    document.getElementById("blockHeight").innerHTML = height
  }, 1000)

  api._provider.on("connect", () => listen())
}

async function listen () {
  const signatures = {}; abi.forEach(f => { if (f.type !== 'event') return; signatures[$vite_vitejs.abi.encodeLogSignature(f)] = f })

  await api.subscribe('createVmlogSubscription', { addressHeightRange: { [contractAddress]: { fromHeight: '0', toHeight: '0' } }}).then((event) => {
      event.on(async (results) => {
        for (const result of results) {
          const f = signatures[result.vmlog.topics[0]]
          if (!f) return

          const decoded = $vite_vitejs.abi.decodeLog(
            f.inputs,
            buffer.Buffer.from(result.vmlog.data, 'base64').toString('hex'),
            result.vmlog.topics.slice(1)
          )

          const data = {}
          for (const input of f.inputs) {
            data[input.name] = decoded[input.name]
          }

          if (f.name === "Mint") {
            updateNameCount()
            if (document.getElementById('nameResult').style.display !== "block") return
            if (data._name !== document.getElementById('searchForName').value) return

            toast("Minted succesfully!")
            hideDefault()
          }

          if (f.name === "Transfer") {
            if (document.getElementById('nameResult').style.display !== "block") return
            if (data._name !== document.getElementById('searchForName').value) return

            toast("Transfer succesful!")
            hideDefault()
          }

          if (f.name === "Change") {
            if (document.getElementById('nameResult').style.display !== "block") return
            if (data._name !== document.getElementById('searchForName').value) return

            toast("Updated sucessfully!")
            hideDefault()
          }
        }
      })
    })
}

function toast(message) {
  const x = document.getElementById("toast")
  x.className = "show"
  x.firstChild.innerHTML = message
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000)
}

function hideDefault () {
  document.getElementById('nameResult').style.display = 'none'
  document.getElementById('ownerTools').style.display = 'none'
  document.getElementById('mintingArea').style.display = 'none'
  document.getElementById('transferingArea').style.display = 'none'
  document.getElementById('editingArea').style.display = 'none'
  document.getElementById('nameTargetView_').style.display = 'none'
  document.getElementById('nameSlotView_').style.display = 'none'
  document.getElementById('nameTagsView_').style.display = 'none'
  document.getElementById('nameShow_').style.display = 'none'
  document.getElementById('ownerTools').innerHTML = 'Show owner tools'
  document.getElementById('transferingArea_transferAddress').value = ''
}

async function requestOffCData (tag, params) {
  const call = $vite_vitejs.abi.encodeFunctionCall(abi, params, tag)

  const result = await api.request('contract_callOffChainMethod', {
    address: contractAddress,
    data: buffer.Buffer.from(call, 'hex').toString('base64'),
    code: offchaincode
  })

  const decoded = $vite_vitejs.abi.decodeParameters(
    abi.find(e => e.name === tag).outputs.map(e => e.type),
    buffer.Buffer.from(result, 'base64').toString('hex')
  )

  return decoded[0]
}